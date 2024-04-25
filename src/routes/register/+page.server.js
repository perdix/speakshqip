import { redirect } from "@sveltejs/kit";

export const actions = {
  register: async ({ cookies, request, locals: { supabase } }) => {
    console.log("register action");
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");

    console.log("email:", email);
    console.log("password", password);

    const { data:signUpData, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      
    })
    if (error) {
      console.error("error:", error);
      return { success: false, error: "Register not successful!" };
    }
    return redirect(303, "/dashboard");
  },
};

// // page.server.js
// import { supabase } from '$lib/supabaseClient';

// export async function post({ body }) {
//   const { email, password } = body;

//   try {
//     const { user, error } = await supabase.auth.signIn({
//       email,
//       password
//     });

//     if (error) {
//       console.error('Login error:', error.message);
//       return {
//         status: 400,
//         body: { error: 'Invalid credentials' }
//       };
//     } else if(user) {
//       console.log('Login Succesfull');
//     }

//     return {
//       status: 200,
//       body: { user }
//     };
//   } catch (error) {
//     console.error('Server error:', error.message);
//     return {
//       status: 500,
//       body: { error: 'Server error' }
//     };
//   }
// }
