import { redirect, fail } from "@sveltejs/kit";

export const actions = {
  register: async ({ request, locals: { supabase }, url }) => {
    console.log("register action");

    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");
    const passwordRepeat = data.get("passwordRepeat");

    if (!email || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      return fail(400, { error: "Please enter a valid email address." });
    }

    if (!password || password.length < 8) {
      return fail(400, {
        error: "Password must be at least 8 characters long.",
      });
    }
    if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
      return fail(400, {
        error:
          "Password must contain at least one uppercase letter and one number.",
      });
    }

    if (password !== passwordRepeat) {
      return fail(400, { error: "Passwords do not match." });
    }

    const { data: signUpData, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${url.origin}/auth/callback`,
      },
    });

    if (error) {
      console.error("Supabase error:", error.message);
      return fail(400, {
        error: "Registration was not successful. Please try again.",
      });
    }

    return {
      success: {
        successMessage:
          "Registration successful. Check your email for the verification.",
      },
    };
  },
};
