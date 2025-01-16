export async function load({ params, parent }) {
  const { supabase } = await parent();

  const { data: words, error } = await supabase.from("words").select("*");
  const { data: leaderboard, leaderboardError } = await supabase
  .from("userdetails")
  .select("*")
  .order("xp", { ascending: false }) 
  .limit(5);

  return {
    words,
    leaderboard
  };
}
