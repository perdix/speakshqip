import { error as kitError } from '@sveltejs/kit';
import { Resend } from 'resend';

export const actions = {
  default: async ({ request }) => {
    // Check if API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error('Resend API key is missing');
      return kitError(500, 'Server configuration error');
    }

    // Validate input data
    const data = await request.formData();
    const name = data.get('name')?.toString().trim();
    const email = data.get('email')?.toString().trim();
    const message = data.get('message')?.toString().trim();

    // Input validation
    if (!name || !email || !message) {
      return kitError(400, 'Alle Felder sind erforderlich');
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return kitError(400, 'Ungültige E-Mail-Adresse');
    }

    // Initialize Resend client
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      const result = await resend.emails.send({
        from: '',
        to: ['erlelb18@htl-shkoder.com'],
        subject: 'Neue Kontaktanfrage',
        html: `
          <html>
            <body>
              <h1>Neue Kontaktanfrage</h1>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>E-Mail des Absenders:</strong> ${email}</p>
              <p><strong>Nachricht:</strong></p>
              <p>${message}</p>
            </body>
          </html>
        `
      });
    
      // Check for Resend-specific error
      if (result.error) {
        console.error('Resend-Fehler:', result.error);
        if (result.error.message.includes('The gmail.com domain is not verified')) {
          return kitError(403, 'Domain nicht verifiziert. Bitte verifizieren Sie Ihre Domain auf https://resend.com/domains');
        }
        return kitError(500, 'E-Mail konnte nicht gesendet werden');
      }
    } catch (error) {
      console.error('Fehler beim Senden der E-Mail:', error);
      return kitError(500, 'Es gab einen Fehler beim Senden der E-Mail');
    }

    // If no error, return success
    return { 
      success: true, 
      message: 'Nachricht erfolgreich gesendet!' 
    };
  }
};
