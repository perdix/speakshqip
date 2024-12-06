import { createClient } from "@supabase/supabase-js";
import { redirect } from "@sveltejs/kit";
const supabase = createClient(
  "https://bwzdxxvcoifrajdrfrai.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3emR4eHZjb2lmcmFqZHJmcmFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2OTc5NjgsImV4cCI6MjAyNDI3Mzk2OH0.bsXtaDV4P95MZD7UETjk17ckEXedoZV6O4VKpVqit0E",
);
/** @type {import('./$types').PageServerLoad} */
export async function load({ params, parent, locals }) {
  const { session, user } = await parent();
  const { data } = supabase.storage.from('media').getPublicUrl('TestAudio/test.m4a');
  const { data : alphabetData } = await supabase.from("alphabet").select("*");
 return {
   publicUrl: data.publicUrl,
   alphabetData 
 }
}
