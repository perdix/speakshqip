// +page.server.js
import { redirect } from "@sveltejs/kit";

export async function load({ params, parent, locals: { supabase } }) {
  const { session, userDetails } = await parent();

  const { data: nationalities, error: countryError } = await supabase
    .from("countries")
    .select("*");
    const urls = [];

    for(let i = 1; i <= 7; i++){
      const filePath = `avatars/avatar${i}.jpg`;
      const { data: avatarFiles, error: avatarError } = await supabase.storage.from("media").getPublicUrl(filePath);
      if(avatarError){
        console.error("error:", avatarError);
        return { success: false, message: "Avatars could not be loaded" };
      }
    
      urls.push(avatarFiles);

    }
    console.log(urls);
  if (countryError) {
    console.error("error:", countryError);
    return { success: false, message: "Nationalities could not be loaded" };
  }

 
  if (!session) {
    throw redirect(302, "/login");
  }

  return {
    userDetails,
    nationalities,
    urls
  };
}

export const actions = {
  editUser: async ({ cookies, request, locals: { supabase }, url }) => {
    const formData = await request.formData();
    const username = formData.get("username");
    const bio = formData.get("bio");
    const age = formData.get("age");
    const nationality = formData.get("nationality");
    const user_id = formData.get("user_id");
    const image = formData.get("image");
    let image_url = null;
    let public_image_url = null;

    if (image.size > 0) {
      const { data: imageData, error: imageError } = await supabase.storage
        .from("profiles")
        .upload(`${user_id}/${image.name}`, image, {
          cacheControl: "3600",
          upsert: true,
        });
      if (imageError) {
        console.error("Failed to upload image:", imageError);
        return { success: false, message: "Failed to upload image" };
      }
      image_url = imageData.path;
      const { data: urlData } = supabase.storage
        .from("profiles")
        .getPublicUrl(image_url);
      public_image_url = urlData.publicUrl;
      const { data, error } = await supabase
        .from("userdetails")
        .update({
          username,
          bio,
          age,
          nationality,
          public_image_url,
          image_url,
        })
        .eq("id", user_id);
    } else {
      const { data, error } = await supabase
        .from("userdetails")
        .update({ username, bio, age, nationality })
        .eq("id", user_id);
    }
  },
};
