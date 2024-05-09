import { redirect } from "@sveltejs/kit";
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://bwzdxxvcoifrajdrfrai.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3emR4eHZjb2lmcmFqZHJmcmFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2OTc5NjgsImV4cCI6MjAyNDI3Mzk2OH0.bsXtaDV4P95MZD7UETjk17ckEXedoZV6O4VKpVqit0E')
/** @type {import('./$types').PageServerLoad} */
export async function load({ params, parent }) {
  const { session, user } = await parent();
  if (!session) {
    redirect(302, "/login");
  }
  // Falls benutzer noch keine profildaten hat wird er zu setup redirected
const { data: userDetails, error } = await supabase
.from('userdetails')
.select('username').eq("id",session.user.id);
const userEmail = userDetails.email;
if(userEmail == null){
  redirect(303, "/setup");
}
 if(error) {
  console.error("Error fetching user details:", error.message);

 }

  return {};
}
