export async function load({ params, parent }) {
  const { supabase } = await parent();
  const { session } = await parent();
  const { data: lastCompletedLesson, error: lessonCompleteError } =
    await supabase
      .from("user_completes_lessons")
      .select("lessonID, completedOn")
      .eq("userID", session.user.id)
      .order("completedOn", { ascending: false })
      .limit(1);

  let lastCompletedCount = 0;

  if (lastCompletedLesson?.length) {
    const { data: lastCompletedLessonCount } = await supabase
      .from("lessons")
      .select("count")
      .eq("id", lastCompletedLesson[0].lessonID)
      .limit(1);

    if (lastCompletedLessonCount?.length) {
      lastCompletedCount = lastCompletedLessonCount[0].count;
    }
  }

  const { data: lesson, error: lessonError } = await supabase
    .from("lessons")
    .select("*")
    .order("count", { ascending: true });

  const { data: unit, error: unitError } = await supabase
    .from("units")
    .select("*");

  if (lessonError || unitError) {
    console.error("Error fetching lessons or units", lessonError, unitError);
    return {
      lesson: [],
      unit: [],
    };
  }
  console.log(lastCompletedCount);
  return {
    lesson,
    unit,
    lastCompletedCount,
  };
}
