import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, parent, locals: { supabase } }) {
  const { session } = await parent();

  if (!session) {
    return redirect(302, "/login");
  }

  // Fetch infoCards
  const { data: infoCards, error: infoError } = await supabase
    .from("infocards")
    .select("*")
    .eq("lessonId", params.lessonId);
  if (infoError) {
    console.error("Error fetching infoCards:", infoError.message);
    return {
      error: "Failed to fetch infoCards",
      status: 500,
    };
  }

  // Fetch examples
  const { data: examples, error: exampleError } = await supabase
    .from("examples")
    .select("*")
    .eq("lessonId", params.lessonId);
  if (exampleError) {
    console.error("Error fetching examples:", exampleError.message);
    return {
      error: "Failed to fetch examples",
      status: 500,
    };
  }

  // Fetch tests
  const { data: tests, error: testError } = await supabase
    .from("tests")
    .select("*")
    .eq("lessonId", params.lessonId);
  if (testError) {
    console.error("Error fetching tests:", testError.message);
    return {
      error: "Failed to fetch tests",
      status: 500,
    };
  }

  if (!tests || tests.length === 0) {
    return {
      error: "No tests found for the given lesson",
      status: 404,
    };
  }

  // Fetch questions for the first test
  const { data: questions, error: questionError } = await supabase
    .from("questions")
    .select("*")
    .eq("testId", tests[0].id);
  if (questionError) {
    console.error("Error fetching questions:", questionError.message);
    return {
      error: "Failed to fetch questions",
      status: 500,
    };
  }

  return {
    session,
    infoCards,
    examples,
    tests,
    questions,
  };
}

export const actions = {
  endLesson: async ({
    params,
    request,
    locals: { supabase },
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

    if (userXPDataError) {
      console.error("Fetching user XP failed:", userXPDataError);
      return { success: false, message: "Could not fetch user XP" };
    }

    userXP += parseInt(userXPData.xp, 10);

    const { error: userError } = await supabase
      .from("userdetails")
      .update({ xp: userXP })
      .eq("id", user_id);

    if (userError) {
      console.error("User update error:", userError);
      return { success: false, message: "Lesson finish failed!" };
    }

    // Check if user already has words for this lesson
    const { data: checkTrue, error: checkFalse } = await supabase
      .from("words")
      .select("userID", "lessonID")
      .eq("lessonID", params.lessonId)
      .eq("userID", user_id);

    if (!checkTrue?.length) {
      const { data: lessonwords, error: wordsError } = await supabase
        .from("words")
        .select("id")
        .eq("lessonID", params.lessonId);

      if (wordsError) {
        console.error("Error fetching lesson words:", wordsError);
      } else {
        for (const word of lessonwords) {
          const { error: wordInsertError } = await supabase
            .from("user_learned_words")
            .insert({ userID: user_id, wordID: word.id });

          if (wordInsertError) {
            console.error("Error inserting word:", wordInsertError);
          }
        }
      }

      const { error: errorData } = await supabase
        .from("user_completes_lessons")
        .insert({ userID: user_id, lessonID: params.lessonId });

      if (errorData) {
        console.error("Error Finishing Lesson", errorData);
      }
    }

    return redirect(302, "/learn");
  },
};
