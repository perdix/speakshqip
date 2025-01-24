import { createClient } from "@supabase/supabase-js";
import { redirect } from "@sveltejs/kit";

export async function load({ params, parent, locals: { supabase } }) {
  const { session } = await parent();

  // Fetch all rows from the "numbers" table
  const { data: numbersData, error: numbersError } = await supabase
    .from("numbers")
    .select("*");

  if (numbersError) {
    console.error("Error fetching numbers data:", numbersError);
    return { error: "Failed to load numbers data." };
  }

  const numbersWithAudio = numbersData.map((number) => {
    const fileName = `NumbersAudio/${number.numbers_column}.m4a`; 
    const { data: publicUrlData } = supabase.storage.from("media").getPublicUrl(fileName);

    return {
      ...number,
      audioUrl: publicUrlData?.publicUrl || null, 
    };
  });


  return {
    numbersData: numbersWithAudio, 
  };
}
