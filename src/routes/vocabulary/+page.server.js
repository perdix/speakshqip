/** @type {import('./$types').PageServerLoad} */
export async function load({ locals: { supabase } }) {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const userId = session?.user?.id;

  const { data: vocabularyData, error: vocabularyError } = await supabase
    .from("user_learned_words")
    .select("*")
    .eq("userID", userId);

  if (vocabularyError) {
    console.error("Error fetching vocabulary data:", vocabularyError);
    return { wordData: [] };
  }

  const wordData = [];
  for (const vocabEntry of vocabularyData) {
    const { data: wordEntry, error: wordAccessError } = await supabase
      .from("words")
      .select("*")
      .eq("id", vocabEntry.wordID);
    if (wordAccessError) {
      console.error("Error fetching word:", wordAccessError);
      continue;
    }

    if (wordEntry && wordEntry.length > 0) {
      wordData.push(wordEntry[0]);
    }
  }

  return {
    wordData,
  };
}
