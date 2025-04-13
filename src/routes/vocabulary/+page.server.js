/** @type {import('./$types').PageServerLoad} */
export async function load({ locals: { supabase } }) {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const userId = session?.user?.id;

  if (!userId) {
    return { wordData: [] };
  }

  const { data: vocabularyData, error: vocabularyError } = await supabase
    .from("user_learned_words")
    .select("*")
    .eq("userID", userId);

  if (vocabularyError || !vocabularyData) {
    console.error("Error fetching vocabulary data:", vocabularyError);
    return { wordData: [] };
  }

  const wordData = [];

  for (const vocabEntry of vocabularyData) {
    const { data: wordEntry, error: wordAccessError } = await supabase
      .from("words")
      .select("*")
      .eq("id", vocabEntry.wordID)
      .single();

    if (wordAccessError || !wordEntry) {
      console.error("Error fetching word:", wordAccessError);
      continue;
    }

    const fileName = `Vocab/${wordEntry.sound_url}.m4a`;
    const { data: audioData, error: audioError } = supabase.storage.from("media").getPublicUrl(fileName);

    if (audioError) {
      console.error("Error getting audio URL:", audioError);
    }

    wordData.push({
      word: wordEntry.word_al,
      translation: wordEntry.word_en,
      audioUrl: audioData?.publicUrl ?? null,
    });
  }

  return {
    wordData,
  };
}
