<script>
  import LearnWordVocab from "../../lib/components/LearnWordVocab.svelte";
  export let data;

  export let wordData = data.wordData;

  const wordPairs = wordData.map((word) => ({
    word: word.word_al,
    translation: word.word_en,
  }));

  const repeatTimes = Array(9).fill(0);
</script>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
  integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>
<div class="w-w-90/100 ml-auto mr-auto flex items-start flex-col">
  <h1 class="text-4xl font-bold mt-9 mb-2 text-cd-black">Vocabulary</h1>
  <p class="mt-4">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo a molestias
    eum tempore, dolorem eligendi asperiores distinctio.
  </p>
  <p class="mt-4">You are on the right track</p>
  <p class="mt-12 text-2xl text-gray-400">New words and phrases learnt</p>

  <div
    class=" flex justify-center md:justify-start items-center flex-wrap w-full mt-2 mb-3"
  >
    {#each repeatTimes as _}
      <LearnWordVocab />
    {/each}
  </div>
</div>
