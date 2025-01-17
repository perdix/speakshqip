import { createClient } from "@supabase/supabase-js";
import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, parent, locals: {supabase}}) {
  const { session } = await parent();
  const { data } = supabase.storage.from('media').getPublicUrl('TestAudio/test.m4a');
  const { data : alphabetData } = await supabase.from("alphabet").select("*") .order('uppercase_letter', { ascending: true });
 return {
   publicUrl: data.publicUrl,
   alphabetData 
 }
}


