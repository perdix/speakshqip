export async function load({ url, parent, locals: { supabase } }) {
  const { session } = await parent();

  if (!session) {
    throw redirect(302, "/login");
  }

  const page = parseInt(url.searchParams.get("page")) || 1;
  const limit = 10;
  const offset = (page - 1) * limit;

  const { data: userDetails, error, count } = await supabase
    .from("userdetails")
    .select("*", { count: "exact" })
    .neq("username",null) 
    .range(offset, offset + limit - 1);

  if (error) {
    console.error("Error fetching user details:", error);
    throw redirect(302, "/error");
  }

  return {
    userDetails,
    total: count,
    page,
    limit,
  };
}
