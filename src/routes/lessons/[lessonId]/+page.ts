/** @type {import('./$types').PageLoad} */
export async function load({ params, parent }) {
  const { supabase } = await parent();

  // Fetch infoCards
  const { data: infoCards, error: infoError } = await supabase.from("infocards").select("*").eq('lessonId', params.lessonId);
  if (infoError) {
    console.error('Error fetching infoCards:', infoError.message);
    return {
      error: 'Failed to fetch infoCards',
      status: 500
    };
  }

  // Fetch examples
  const { data: examples, error: exampleError } = await supabase.from("examples").select("*").eq('lessonId', params.lessonId);
  if (exampleError) {
    console.error('Error fetching examples:', exampleError.message);
    return {
      error: 'Failed to fetch examples',
      status: 500
    };
  }

  // Fetch tests
  const { data: tests, error: testError } = await supabase.from("tests").select("*").eq('lessonId', params.lessonId);
  if (testError) {
    console.error('Error fetching tests:', testError.message);
    return {
      error: 'Failed to fetch tests',
      status: 500
    };
  }

  // Ensure there's at least one test before querying questions
  if (!tests || tests.length === 0) {
    return {
      error: 'No tests found for the given lesson',
      status: 404
    };
  }

  // Fetch questions based on the first test's ID
  const { data: questions, error: questionError } = await supabase.from("questions").select("*").eq('testId', tests[0].id);
  if (questionError) {
    console.error('Error fetching questions:', questionError.message);
    return {
      error: 'Failed to fetch questions',
      status: 500
    };
  }

  return {
    infoCards, examples, tests, questions
  };
}
