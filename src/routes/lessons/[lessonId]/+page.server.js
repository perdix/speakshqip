import { redirect } from "@sveltejs/kit";
import { check } from "prettier";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, parent }) {
  const { session, user } = await parent();
  if (!session) {
    return redirect(302, "/login");
  }

  return { session };
}

export const actions = {
  endLesson: async ({
    params,
    cookies,
    request,
    locals: { supabase },
    url,
  }) => {
    const formData = await request.formData();

    const user_id = formData.get("user_id");
    const xpNegative = formData.get("lostXP");
 
    const { data: lessonData, error: lessonError } = await supabase
      .from("lessons")
      .select("xp")
      .eq("id", params.lessonId)
      .single();

    if (lessonError) {
      console.error("Lesson error:", lessonError);
      return { success: false, message: "Lesson finish failed!" };
    }

    const lessonXP = lessonData.xp;
    let userXP = lessonXP - parseInt(xpNegative, 10);
    const { data: userXPData, error: userXPDataError } = await supabase
      .from("userdetails")
      .select("xp")
      .eq("id", user_id)
      .single();

    userXP += parseInt(userXPData.xp, 10);

    const { data: userData, error: userError } = await supabase
      .from("userdetails")
      .update({ xp: userXP })
      .eq("id", user_id);

    if (userError) {
      console.error("User update error:", userError);
      return { success: false, message: "Lesson finish failed!" };
    }

    const { data: checkTrue, error: checkFalse } = await supabase
      .from("words")
      .select("userID", "lessonID")
      .eq("lessonID", params.lessonId)
      .eq("userID", user_id);
    if (checkFalse) {
      const { data: lessonwords, error: wordsError } = await supabase
        .from("words")
        .select("id")
        .eq("lessonID", params.lessonId);

      for (const word of lessonwords) {
        const { data: wordData, error: wordInsertError } = await supabase
          .from("user_learned_words")
          .insert({ userID: user_id, wordID: word.id });

        if (wordInsertError) {
          console.error("Error inserting word:", wordInsertError);
        } else {
          console.log("Inserted word data:", wordData);
        }
      }
      const { data: completeData, error: errorData } = await supabase
        .from("user_completes_lessons")
        .insert({ userID: user_id, lessonID: params.lessonId });
      if (errorData) {
        console.error("Error Finishing Lesson", errorData);
      }
    }

    return redirect(302, "/learn");
  },
};
