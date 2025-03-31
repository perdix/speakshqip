import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, parent, locals: { supabase } }) {
  const { session, user } = await parent();
  console.log(session)
  if (!session) {
    redirect(302, "/login");
  }

  const { data: nationalities, error: countryError } = await supabase
    .from("countries")
    .select("*");

  if (countryError) {
    console.error("error:", nationalityError);
    return { success: false, message: "Nationalities could not be loaded" };
  }

  return { nationalities };
}

export const actions = {
  setup: async ({ cookies, request, locals: { supabase }, url }) => {
    console.log("action started");
    const formData = await request.formData();

    const username = formData.get("username");
    const desc = formData.get("desc");
    const age = formData.get("age");
    const nation = formData.get("nationality");
    const user_id = formData.get("user_id");

    const { data, error } = await supabase
      .from("userdetails")
      .update({
        username: username,
        bio: desc,
        age: age,
        nationality: nation,
        level: 0,
        xp: 0,
      })
      .eq("id", user_id);

    if (error) {
      console.error("error:", error);
      return { success: false, message: "Word not saved!" };
    } else {
      redirect(302, "/dashboard");
    }
    return {
      success: true,
      message: "Super!!!",
    };
  },
};
