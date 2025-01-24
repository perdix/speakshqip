import { createClient } from "@supabase/supabase-js";
import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, parent, locals: { supabase } }) {
  const { session } = await parent();

  const { data: alphabetData, error } = await supabase
    .from("alphabet")
    .select("*")
    .order("uppercase_letter", { ascending: true });

  if (error) {
    console.error("Error fetching alphabet data:", error);
    return { error: "Failed to load alphabet data." };
  }

  const publicUrls = alphabetData.map((alphabet) => {
    const fileName = `AlphabetAudio/${alphabet.uppercase_letter}.m4a`; 
    const { data } = supabase.storage.from("media").getPublicUrl(fileName);
    return {
      ...alphabet,
      audioUrl: data.publicUrl, 
    };
  });

  return {
    alphabetData: publicUrls,
  };
}


