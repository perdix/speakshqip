export async function load({ params, parent }) {
  const { supabase } = await parent();

  const { data: words, error } = await supabase.from("words").select("*");

  return {
    words,
  };
}
