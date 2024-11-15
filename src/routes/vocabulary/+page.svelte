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
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
  integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>

<div class="w-w-90/100 ml-auto mr-auto">
  <h1 class="text-4xl font-bold mt-9 mb-2 text-cd-black">Vocabulary</h1>
  <p class="mt-4">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo a molestias
    eum tempore, dolorem eligendi asperiores distinctio.
  </p>
  <p class="mt-4">You are on the right track</p>
  <p class="mt-12 text-2xl text-gray-400">New words and phrases learnt</p>

  <div class=" flex justify-start items-center flex-wrap w-full">
    {#each repeatTimes as _}
      <LearnWordVocab />
    {/each}
  </div>
</div>
