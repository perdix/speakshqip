/** @type {import('./$types').PageLoad} */
export async function load({ params, parent }) {
    const { supabase } = await parent();

     
    const { data: info, infoError } = await supabase.from("infoCards").select("*").eq('lessonId',params.lessonId);
  
  
    return {
      info
    };
  }
  