import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, parent }) {
  const { session, user } = await parent();
  if (!session) {
    redirect(302, "/login");
  }


  return {};
}
