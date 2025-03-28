// src/routes/contact/send/+server.js
import { json } from '@sveltejs/kit';
import axios from 'axios';
import {RESEND_API_KEY} from "$env/static/private";

const TO_EMAIL = "Erlelb18@htl-shkoder.com"; 

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  try {
    const { name, email, message } = await request.json();

    const payload = {
      from: "team@speakshqip.net", // Must be a verified sender on Resend
      to: TO_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      reply_to: email, // Allows you to reply directly to the sender
      html: `
        <h1>Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await axios.post('https://api.resend.com/emails', payload, {
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    return json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return json({ error: "Failed to send email" }, { status: 500 });
  }
}
