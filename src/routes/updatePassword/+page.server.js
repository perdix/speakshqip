import { redirect } from "@sveltejs/kit";

export const actions = {
  login: async ({ cookies, request, locals: { supabase } }) => {
    if (!session) {
      redirect(302, "/login");
    }
    const data = await request.formData();
    const newPassword = data.get("password");
    const repeatpassword= data.get("repeatpassword");
    if(newPassword != repeatpassword){
      console.error("Error Password is not the same")
    } else {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });
      if (error) {
        console.error("Error updating password:", error.message);
      } 
      else {
        console.log("Password updated successfully!");
      }

    }
   

    return redirect(303, "/dashboard");
  },
};
