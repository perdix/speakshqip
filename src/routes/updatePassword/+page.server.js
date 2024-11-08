import { redirect } from "@sveltejs/kit";

export const load = async ({parent, url, locals: { supabase }}) => {
  const { session, user } = await parent();
  if (!session) {
    // detect code
    let code = url.searchParams.get("code");
    if (code) {
      const { error, data } = await supabase.auth.exchangeCodeForSession(code)
      // redirect(302, "/updatePassword");
    } else {
      redirect(302, "/login");
    }
  }
};

export const actions = {
  login: async ({ cookies, request, locals: { supabase, safeGetSession } }) => {
    const { session } = await safeGetSession();
    console.log("session", session);

    if (!session) {
      console.error("Error no session");
      redirect(302, "/login");
    }
    const data = await request.formData();
    const newPassword = data.get("password");
    const repeatpassword = data.get("repeatpassword");

    if (newPassword != repeatpassword) {
      console.error("Error Password is not the same");
    } else {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });
      if (error) {
        console.error("Error updating password:", error.message);
      } else {
        console.log("Password updated successfully!");
      }
    }

    return redirect(303, "/dashboard");
  },
};
