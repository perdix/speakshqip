import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, parent, locals: { supabase } }) {
  const { session, user } = await parent();
  if (!session) {
    redirect(302, "/login");
  }
  const { data: userDetails, error } = await supabase
    .from("userdetails")
    .select("username")
    .eq("id", session.user.id);
  
  console.log(userDetails)
  const userName = userDetails[0].username;
  console.log(userName);
  if (userName == null) {
    redirect(303, "/setup");
  }
  if (error) {
    console.error("Error fetching user details:", error.message);
  }

  return {};

}
