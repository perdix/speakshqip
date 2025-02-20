import { CustomAuthError } from "@supabase/supabase-js";

export async function load({ params, parent }) {
  const { supabase } = await parent();
  const { session } = await parent();
  const { data: userDetails, error: userError } = await supabase
    .from("userdetails")
    .select("username, id")
    .eq("id", session.user.id)
    .single();

  const { data: words, error } = await supabase.from("words").select("*");

  const { data: leaderboard, leaderboardError } = await supabase
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
  let unitDescription = "An introduction to the Albanian language,  a quickcourse for tourists";

  if (lastCompletedLesson?.length > 0) {
    const lastLessonID = lastCompletedLesson[0].lessonID;

    const { data: lessonDetails, error: lessonDetailsError } = await supabase
      .from("lessons")
      .select("unitId, count")
      .eq("id", lastLessonID)
      .single();

    if (lessonDetails) {
      const { data: totalLessonsInUnit, error: unitError } = await supabase
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
  };
}
