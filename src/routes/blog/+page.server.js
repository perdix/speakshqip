// src/routes/blog/+page.server.js

import { createClient } from '@supabase/supabase-js';

// Supabase-Client initialisieren
const supabase = createClient(
  'https://bwzdxxvcoifrajdrfrai.supabase.co', // Deine Supabase-URL
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3emR4eHZjb2lmcmFqZHJmcmFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2OTc5NjgsImV4cCI6MjAyNDI3Mzk2OH0.bsXtaDV4P95MZD7UETjk17ckEXedoZV6O4VKpVqit0E' // Dein API Key
);

// Funktion zum Abrufen der Tipps
async function getTips() {
  const { data: tips, error } = await supabase
    .from('10tips')
    .select('id, titel, description, image_url');

  if (error) {
    console.error('Fehler beim Abrufen der Daten:', error);
    throw new Error('Daten konnten nicht geladen werden');
  }

  return tips;
}

// SvelteKit load Funktion für serverseitiges Laden der Daten
export async function load() {
  try {
    const tips = await getTips(); // Hole die Tipps von Supabase
    return { props: { tips } }; // Gib die Tipps als Props zurück
  } catch (error) {
    console.error('Fehler beim Laden der Tipps:', error);
    return { props: { tips: [] } }; // Leere Liste bei Fehler zurückgeben
  }
}
