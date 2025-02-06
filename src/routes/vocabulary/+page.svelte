<script>
  import LearnWordVocab from "../../lib/components/LearnWordVocab.svelte";
  export let data;
  export let vocabNum;
  export let wordData = data.wordData;

  const wordPairs =
    wordData?.map((word) => ({
      word: word.word_al,
      translation: word.word_en,
      // Here i think we shall put the audio url maybe?
    })) || [];

  const repeatTimes = wordPairs.length;
</script>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
  integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>
<div class="w-w-90/100 ml-auto mr-auto flex flex-col">
  <h1 class="text-4xl md:text-6xl font-bold mt-9 text-cd-black">
    Vocabulary <i class="fa-solid fa-book ml-2 text-cd-red"></i>
  </h1>
  <p class=" text-xl md:text-2xl md:font-bold mt-9">
    Take a look at the words you have learned up until now through your lessons.
  </p>
  <p
    class=" md:w-4/5 pointer-events-none p-4 bg-zinc-300 rounded-lg mt-4 font-bold text-zinc-500 flex justify-start items-center"
  >
    Click on a word to hear its pronunciation <i
      class="fa-solid fa-arrow-pointer ml-3 text-xl"
    ></i>
  </p>
  <p class="md:w-4/5 mt-4 p-4 rounded-lg bg-zinc-300 text-zinc-500">
    <span class=" font-bold">{repeatTimes}</span> words learned
  </p>

  <h1 class=" mt-8 text-2xl font-bold">Your vocabulary</h1>

  <div
    class=" flex justify-between md:justify-start items-center flex-wrap w-full mt-4 mb-3"
  >
    {#each wordPairs as { word, translation }}
      <!-- Here we should assign the audioUrl prop, but we don't have it yeeeet-->
      <LearnWordVocab word_al={word} word_en={translation} />
    {/each}
  </div>
</div>
