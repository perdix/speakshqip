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
    .select("wordID")
    .eq("userID", userId);

  if (vocabularyError || !vocabularyData) {
    console.error("Error fetching vocabulary data:", vocabularyError);
    return { wordData: [] };
  }

  const wordIds = vocabularyData.map(entry => entry.wordID);

  if (wordIds.length === 0) {
    return { wordData: [] };
  }

  const { data: wordsData, error: wordsError } = await supabase
    .from("words")
    .select("*")
    .in("id", wordIds);

  if (wordsError || !wordsData) {
    console.error("Error fetching words:", wordsError);
    return { wordData: [] };
  }

  const wordData = wordsData.map(wordEntry => {
    const fileName = `Vocab/${wordEntry.sound_url}.m4a`;
    const { data: audioData } = supabase.storage.from("media").getPublicUrl(fileName);

    return {
      word: wordEntry.word_al,
      translation: wordEntry.word_en,
      audioUrl: audioData?.publicUrl ?? null,
    };
  });

  return {
    wordData,
  };
}