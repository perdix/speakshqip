import { redirect } from "@sveltejs/kit";
import { CustomAuthError } from "@supabase/supabase-js";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, parent, locals: { supabase } }) {
  try {
    const { user, session } = await parent();

    if (!user) {
      console.warn("No user session found.");
      throw redirect(302, "/login");
    }

    const { data: nationalities, error: nationalityError } = await supabase
      .from("countries")
      .select("*");

    if (nationalityError) {
      console.error("Error loading nationalities:", nationalityError);
      return { success: false, message: "Nationalities could not be loaded" };
    }

    const { data: userDetails, error: userError } = await supabase
      .from("userdetails")
      .select("username, id")
      .eq("id", session.user.id)
      .single();

    let hasUsername = true;
    const userName = userDetails?.username;
    if (!userName) hasUsername = false;

    const { data: words, error: wordsError } = await supabase
      .from("words")
      .select("*");

    const { data: leaderboard, error: leaderboardError } = await supabase
      .from("userdetails")
      .select("*")
      .order("xp", { ascending: false })
      .limit(5);

    const { data: lastCompletedLesson, error: lessonError } = await supabase
      .from("user_completes_lessons")
      .select("lessonID, completedOn")
      .eq("userID", userDetails.id)
      .order("completedOn", { ascending: false })
      .limit(1);

    let progress = 0;
    let totalLessons = 10;
    let currentUnit = "Welcome to Albania!";
    let unitCount = 1;
    let unitDescription =
      "An introduction to the Albanian language, a quick course for tourists";

    const { count } = await supabase
      .from("units")
      .select("*", { count: "exact", head: true });

    if (lastCompletedLesson?.length > 0) {
      const lastLessonID = lastCompletedLesson[0].lessonID;

      const { data: lessonDetails } = await supabase
        .from("lessons")
        .select("unitId, count")
        .eq("id", lastLessonID)
        .single();

      if (lessonDetails) {
        const { data: totalLessonsInUnit } = await supabase
          .from("lessons")
          .select("count")
          .eq("unitId", lessonDetails.unitId)
          .order("count", { ascending: true });

        const { data: unitData } = await supabase
          .from("units")
          .select("*")
          .eq("id", lessonDetails.unitId)
          .single();

        if (unitData) {
          currentUnit = unitData.name;
          unitCount = unitData.unitCount;
          unitDescription = unitData.desc;
        }

        totalLessons = totalLessonsInUnit?.length || 1;
        progress = Math.round((lessonDetails.count / totalLessons) * 100);
      }
    }

    return {
      words,
      leaderboard,
      progress,
      totalLessons,
      currentUnit,
      unitCount,
      unitDescription,
      count,
      hasUsername,
      nationalities,
    };
  } catch (error) {
    console.error("Error in load():", error);
    throw redirect(302, "/login");
  }
}

export const actions = {
  setup: async ({ request, locals: { supabase } }) => {
    try {
      const formData = await request.formData();

      const username = formData.get("username");
      const desc = formData.get("desc");
      const age = formData.get("age");
      const nation = formData.get("nationality");
      const user_id = formData.get("user_id");

      if (!username || !user_id) {
        return {
          success: false,
          message: "Missing required fields.",
        };
      }

      const { error } = await supabase
        .from("userdetails")
        .update({
          username,
          bio: desc,
          age,
          nationality: nation,
          level: 0,
          xp: 0,
        })
        .eq("id", user_id);

      if (error) {
        console.error("Supabase update error:", error);
        return { success: false, message: "Profile setup failed." };
      }

      return {
        success: true,
        message: "Profile successfully updated!",
        reload: true,
      };
    } catch (err) {
      console.error("Unexpected error in setup action:", err);
      return {
        success: false,
        message: "An unexpected error occurred.",
      };
    }
  },
};
