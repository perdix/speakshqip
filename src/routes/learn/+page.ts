export async function load({ params, parent }) {
  const { supabase } = await parent();

  const { data: lesson, error: lessonError } = await supabase
    .from("lessons")
    .select("*");
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

  return {
    lesson,
    unit,
  };
}
