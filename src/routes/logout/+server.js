import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function POST({ locals: { supabase } }) {
  const { error } = await supabase.auth.signOut();
  if (error) {
    return { success: false, error: "Logout not successful!" };
  }
  return redirect(302, "/login");
}
