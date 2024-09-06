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

  // Fetch user details from Supabase
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
