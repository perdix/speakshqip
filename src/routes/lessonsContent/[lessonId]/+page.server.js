import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, parent,locals: { supabase } }) {
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
    throw error(500, "Failed to fetch infoCards");
  }

  // Fetch examples
  const { data: examples, error: exampleError } = await supabase
    .from("examples")
    .select("*")
    .eq("lessonId", params.lessonId);
  if (exampleError) {
    console.error("Error fetching examples:", exampleError.message);
    throw error(500, "Failed to fetch examples");
  }

  // Fetch tests
  const { data: tests, error: testError } = await supabase
    .from("tests")
    .select("*")
    .eq("lessonId", params.lessonId);
  if (testError) {
    console.error("Error fetching tests:", testError.message);
    throw error(500, "Failed to fetch tests");
  }

  if (!tests || tests.length === 0) {
    throw error(404, "No tests found for the given lesson");
  }

  // Fetch questions for the first test
  const { data: questions, error: questionError } = await supabase
    .from("questions")
    .select("*")
    .eq("testId", tests[0].id);
  if (questionError) {
    console.error("Error fetching questions:", questionError.message);
    throw error(500, "Failed to fetch questions");
  }

  return {
    infoCards,
    examples,
    tests,
    questions,
  };
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, locals: { supabase } }) => {
    try {
      const { table, updatedDetails } = await request.json();
      console.log(updatedDetails);

      if (!updatedDetails) {
        throw error(400, "Invalid data: Missing details");
      }

      if (updatedDetails.id) {
        // Update
        const { error: updateError } = await supabase
          .from(table)
          .update(updatedDetails)
          .eq("id", updatedDetails.id);

        if (updateError) {
          console.error(`Update error on table ${table}:`, updateError);
          throw error(500, `Failed to update ${table}`);
        }

        return { success: true };
      } else {
        // Insert
        delete updatedDetails.id;

        const { error: insertError } = await supabase
          .from(table)
          .insert(updatedDetails);

        if (insertError) {
          console.error(`Insert error on table ${table}:`, insertError);
          throw error(500, `Failed to insert into ${table}`);
        }

        return { success: true };
      }
    } catch (err) {
      console.error("Server error:", err);
      throw error(500, "Internal Server Error");
    }
  },
};
