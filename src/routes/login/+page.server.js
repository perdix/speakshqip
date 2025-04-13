import { redirect } from "@sveltejs/kit";

export const actions = {
  login: async ({ cookies, request, locals: { supabase } }) => {
    console.log("login action");
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");

    console.log("email:", email);
    console.log("password", password);

    const { data: loginData, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      console.error("error:", error);
      return {
        success: false,
        error: "Login not successful! Username or Password are incorrect",
      };
    }

    throw redirect(303, "/dashboard");
  },
};
