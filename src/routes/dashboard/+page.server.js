import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, locals: { safeGetSession } }) {
  const { session, user } = await safeGetSession();

  console.log("session:", session);
  console.log("user:", user);
  if (!session) {
    redirect(302, "/login");
  }

  return {};
}
