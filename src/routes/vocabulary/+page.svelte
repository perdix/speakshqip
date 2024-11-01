<script>
  import LearnPair from "../../lib/components/LearnPair.svelte";
  export let data;

  export let wordData = data.wordData; 

  const wordPairs = wordData.map(word => ({
    word: word.word_al,
    translation: word.word_en
  }));
  
</script>

<div class="w-w-90/100 ml-auto mr-auto">
  <h1 class="text-4xl font-bold mt-9 mb-2 text-cd-black">Vocabulary</h1>
  <p class="mt-4">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo a molestias
    eum tempore, dolorem eligendi asperiores distinctio.
  </p>
  <p class="mt-4">You are on the right track</p>
  <p class="mt-12 text-2xl text-gray-400">New words and phrases learnt</p>
  {#each wordPairs as pair, i}
    <LearnPair word={pair.word} translation={pair.translation} key={i} />
  {/each}
</div>