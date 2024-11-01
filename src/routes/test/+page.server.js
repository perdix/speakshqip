import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, parent }) {
  const { session, user } = await parent();
  if (!session) {
    redirect(302, "/login");
  }

  return {};
}

export const actions = {
  saveWord: async ({ cookies, request, locals: { supabase } }) => {
    const formData = await request.formData();
    const englishWord = formData.get("word_en");
    const albanianWord = formData.get("word_al");

    const user_id = formData.get("user_id");

    const { data, error } = await supabase
      .from("words")
      .insert([{ word_en: englishWord, word_al: albanianWord }])
      .select("*")
      .single();

    if (error) {
      console.error("error:", error);
      return { success: false, message: "Word not saved!" };
    }
    return {
      success: true,
      message: "Super!!!",
    };
  },
};
