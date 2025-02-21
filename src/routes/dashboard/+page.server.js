import { redirect } from "@sveltejs/kit";
import { createClient } from "@supabase/supabase-js";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, parent, locals: { supabase } }) {
  const { session } = await parent();
  if (!session) {
    redirect(302, "/login");
  }

  const { data: userDetails, error: userError } = await supabase
  .from("userdetails")
  .select("username, id")
  .eq("id", session.user.id)
  .single();

if (userError || !userDetails) {
  console.error("Error fetching user details:", userError?.message);
  redirect(303, "/setup");
}
  // Fetch user details
  return{

  }

}
