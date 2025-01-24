import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://bwzdxxvcoifrajdrfrai.supabase.co", 
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3emR4eHZjb2lmcmFqZHJmcmFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2OTc5NjgsImV4cCI6MjAyNDI3Mzk2OH0.bsXtaDV4P95MZD7UETjk17ckEXedoZV6O4VKpVqit0E"
);

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("name");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const message = formData.get("message");

    try {
      const { error } = await supabase.from("contact").insert([{ 
        name, 
        lastName,
        email,
        message 
      }]);

      if (error) throw error;

      return { success: true };
    } catch (err) {
      console.error("Fehler beim Speichern:", err);
      return { error: err.message };
    }
  },
};