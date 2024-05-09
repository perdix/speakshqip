import { redirect } from "@sveltejs/kit";
export const actions = {
  register: async ({ cookies, request, locals: { supabase }, url }) => {
    console.log("register action");
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");
    const username = data.get("username");
    const phone = data.get("phone");

  
    

    const { data: signUpData, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      
      options: {
        emailRedirectTo: `${url.origin}/auth/callback`,
      }

    }); 
    



    
  
    if (error ) {
      console.error("error:", error);
      return { success: false, error: "Register not successful!" };
    } 
    return redirect(303, "/dashboard");
  }
};

