import { supabase } from "$lib/supabaseClient";

export async function load() {
    const { data } = await supabase.from("words").select();

    return {
        words: data ?? [],
    };
}