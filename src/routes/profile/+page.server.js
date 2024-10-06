// +page.server.js
import { redirect } from "@sveltejs/kit";
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://bwzdxxvcoifrajdrfrai.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3emR4eHZjb2lmcmFqZHJmcmFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2OTc5NjgsImV4cCI6MjAyNDI3Mzk2OH0.bsXtaDV4P95MZD7UETjk17ckEXedoZV6O4VKpVqit0E');

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, parent }) {
  const { session } = await parent();

  // Properly throw the redirect
  if (!session) {
    throw redirect(302, "/login");
  }

  const { data: userDetails, error } = await supabase
    .from('userdetails')
    .select('*')
    .eq('id', session.user.id);

  if (error) {
    console.error('Error fetching user details:', error);
    throw new Error('Failed to fetch user details');
  }



  return {
    userDetails
  };
}

export const actions = {
    editUser: async ({ cookies, request, locals: { supabase }, url }) => {
      const formData = await request.formData();
      const username = formData.get('username');
      const bio = formData.get('bio')
      const age = formData.get('age')
      const nationality = formData.get('nationality')
      const user_id = formData.get("user_id");

     
    const { data, error } = await supabase.from("userdetails").update({username:username,bio:bio,age:age,nationality:nationality}).eq("id",user_id);
  
      if (error) {
        console.error('Failed to edit user details:', error);
        return { success: false, message: "Failed to edit user details" };      }
        else {
          redirect(302, "/profile");
        }
  
    }
  };
