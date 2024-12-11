import { createClient } from "@supabase/supabase-js";

// Verwende Umgebungsvariablen für sensible Daten wie Supabase-URL und API-Schlüssel
const supabase = createClient(
  process.env.SUPABASE_URL,  // Nimm die URL aus der Umgebungsvariable
  process.env.SUPABASE_KEY   // Nimm den API-Schlüssel aus der Umgebungsvariable
);

/** @type {import('@sveltejs/kit').PageServerLoad} */
export async function load() {
  try {
    // Abfrage zur Tabelle '10tips'
    const { data, error, status } = await supabase
      .from("10tips")
      .select("id, titel, description");

    // Überprüfe, ob ein Fehler aufgetreten ist
    if (error && status !== 406) {
      throw new Error(`Fehler beim Abrufen der Daten: ${error.message}`);
    }

    // Falls keine Daten gefunden wurden, gib ein leeres Array zurück
    return {
      tips: data || [] // Rückgabe der abgerufenen Daten oder leeres Array
    };
  } catch (error) {
    // Fehlerbehandlung: Ausgabe der Fehlernachricht in der Konsole
    console.error("Fehler beim Laden der Daten:", error.message);

    // Rückgabe einer leeren Liste oder einer entsprechenden Fehlermeldung
    return {
      tips: []
    };
  }
}
