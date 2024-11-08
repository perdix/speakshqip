import { redirect } from "@sveltejs/kit";

export const actions = {
  recover: async ({ cookies, request, locals: { supabase }, url }) => {
    const data = await request.formData();
    const email = data.get("email");
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${url.origin}/updatePassword`,
    });
    if (error) {
      console.error("error:", error);
      return { success: false, error: "Password could not be recovered" };
    } else {
      console.log("Password reset email sent");
    }
  },
};
