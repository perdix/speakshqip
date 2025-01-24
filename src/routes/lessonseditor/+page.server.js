import { redirect } from "@sveltejs/kit";

export async function load({ url, parent, locals: { supabase } }) {
  const { session } = await parent();

  if (!session) {
    throw redirect(302, "/login");
  }

  const page = parseInt(url.searchParams.get("page")) || 1;
  const limit = 10;
  const offset = (page - 1) * limit;

  const {
    data: lessons,
    error,
    count,
  } = await supabase
    .from("lessons")
    .select("*", { count: "exact" })
    .order("count", { ascending: true })
    .range(offset, offset + limit - 1);

  if (error) {
    console.error("Error fetching user details:", error);
    throw redirect(302, "/error");
  }

  return {
    lessons,
    total: count,
    page,
    limit,
  };
}

export const actions = {
  default: async ({ request, locals: { supabase } }) => {
    try {
      const { updatedDetails } = await request.json();
      const { error } = await supabase
        .from("lessons")
        .update(updatedDetails)
        .eq("id", updatedDetails.id);

      if (error) {
        console.error("Error updating lesson details:", error);
        return { success: false, error: "Failed to update lesson details" };
      }

      return { success: true };
    } catch (err) {
      console.error("Error processing request:", err);
      return { success: false, error: "Invalid request" };
    }
  },
};
