/** @type {import('./$types').PageServerLoad} */
export async function load({ url, parent, locals: { supabase } }) {
    const { session, user } = await parent();
    if (!session) {
      redirect(302, "/login");
    }

    const { data: leaderboard, error } = await supabase
    .from("userdetails")
    .select("*")
    .neq("username", null)
    .order("xp", { ascending: false }) 
    .limit(50); 
    if(error){
        console.error("Error leaderboard could not be generated",error);
    }

    return{
        leaderboard,
    }
  }
  