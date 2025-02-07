import { error } from "@sveltejs/kit";

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
        const { error: updateError } = await supabase
          .from(table)
          .update(updatedDetails)
          .eq("id", updatedDetails.id);

        if (updateError) throw error(500, `Failed to update ${table}`);

        return { success: true };
      } else {
        delete updatedDetails.id;
        const { error: insertError } = await supabase
          .from(table)
          .insert(updatedDetails);

        if (insertError) throw error(500, `Failed to insert into ${table}`);

        return { success: true };
      }
    } catch (err) {
      console.error("Server error:", err);
      throw error(500, "Internal Server Error");
    }
  },
};
