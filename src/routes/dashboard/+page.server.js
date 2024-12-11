import { redirect } from "@sveltejs/kit";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://bwzdxxvcoifrajdrfrai.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3emR4eHZjb2lmcmFqZHJmcmFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2OTc5NjgsImV4cCI6MjAyNDI3Mzk2OH0.bsXtaDV4P95MZD7UETjk17ckEXedoZV6O4VKpVqit0E",
);

/** @type {import('./$types').PageServerLoad} */
export async function load({ parent }) {
  const { session, user } = await parent();

  if (!session) {
    throw redirect(302, "/login");
  }

  // Fetch current user's details
  const { data: userDetails, error: userDetailsError } = await supabase
    .from("userdetails")
    .select("username, xp, public_image_url, level")
    .eq("id", session.user.id);

  if (userDetailsError) {
    console.error("Error fetching user details:", userDetailsError.message);
  }

  const userName = userDetails?.[0]?.username;
  if (!userName) {
    throw redirect(303, "/setup");
  }

  // Fetch leaderboard data
  const { data: leaderboard, error: leaderboardError } = await supabase
    .from("userdetails")
    .select("*")
    .neq("username", null)
    .order("xp", { ascending: false })
    .limit(50);

  if (leaderboardError) {
    console.error("Error generating leaderboard:", leaderboardError.message);
  }

  return { userDetails, leaderboard };
}
