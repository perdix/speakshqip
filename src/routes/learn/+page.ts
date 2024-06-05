export async function load({ params, parent }) {
  const { supabase } = await parent();

  const { data: lesson, lessonError } = await supabase.from("lesson").select("*");
  const { data: unit, unitError } = await supabase.from("unit").select("*");


  return {
    lesson,
    unit,
  };
}
