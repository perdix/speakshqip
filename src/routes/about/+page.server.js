import { createClient } from "@supabase/supabase-js";
import { redirect } from "@sveltejs/kit";
const supabase = createClient(
  "https://bwzdxxvcoifrajdrfrai.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3emR4eHZjb2lmcmFqZHJmcmFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2OTc5NjgsImV4cCI6MjAyNDI3Mzk2OH0.bsXtaDV4P95MZD7UETjk17ckEXedoZV6O4VKpVqit0E",
);

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, parent }) {
  // Query zur Datenbank
  const { data, error } = await supabase
    .from('10tips') // Name der Tabelle
    .select('id, titel, description'); // Spalten, die abgerufen werden sollen

  if (error) {
    console.error("Fehler beim Abrufen der Daten:", error);
    throw new Error("Daten konnten nicht geladen werden");
  }

  // Rückgabe der Daten
  return {
    tips: data, // Array der Ergebnisse aus der Tabelle
  };
}
