import { error } from "@sveltejs/kit";

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, params, locals: { supabase } }) => {
    try {
        const { table, updatedDetails } = await request.json();

      if (!updatedDetails || !updatedDetails.id) {
        throw error(400, "Invalid data: Missing ID");
      }




      // Update the correct table in Supabase
      const { error: updateError } = await supabase
        .from(table)
        .update(updatedDetails)
        .eq("id", updatedDetails.id);

      if (updateError) {
        console.error(`Error updating ${table}:`, updateError);
        throw error(500, `Failed to update ${table}`);
      }

      return { success: true };
    } catch (err) {
      console.error("Server error:", err);
      throw error(500, "Internal Server Error");
    }
  },
};
