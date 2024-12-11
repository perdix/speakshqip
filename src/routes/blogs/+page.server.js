import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://bwzdxxvcoifrajdrfrai.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3emR4eHZjb2lmcmFqZHJmcmFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2OTc5NjgsImV4cCI6MjAyNDI3Mzk2OH0.bsXtaDV4P95MZD7UETjk17ckEXedoZV6O4VKpVqit0E'
);

export async function load() {
  // Supabase-Abfrage zur Funfacts-Tabelle
  const { data, error } = await supabase
    .from('Funfacts') // Name der Tabelle
    .select('uuid, title, subtitle'); // Spalten, die abgerufen werden sollen

  if (error) {
    console.error('Fehler beim Abrufen der Daten:', error);
    throw new Error('Daten konnten nicht geladen werden');
  }

  // Rückgabe der abgerufenen Daten
  return {
    props: {
      funfacts: data // Array der Ergebnisse
    }
  };
}
