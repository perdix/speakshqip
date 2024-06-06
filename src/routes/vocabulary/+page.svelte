<script>
  import LearnPair from "../../lib/components/LearnPair.svelte";
  let wordPair = [
    {
      word: "Shpejtë",
      translation: "Quick",
    },
    {
      word: "Mëso",
      translation: "Learn",
    },
    {
      word: "Aftësi",
      translation: "Skills",
    },
    {
      word: "Ekspert",
      translation: "Expert",
    },
    {
      word: "Praktiko",
      translation: "Practice",
    },
    {
      word: "Dituri",
      translation: "Knowledge",
    },
  ];
</script>

<div class=" w-w-90/100 ml-auto mr-auto">
  <h1 class="text-4xl font-bold mt-9 mb-2 text-cd-black">Vocabulary</h1>
  <p class=" mt-4">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo a molestias
    eum tempore, dolorem eligendi asperiores distinctio.
  </p>
  <p class=" mt-4">You are on the right track</p>
  <p class=" mt-12 text-2xl text-gray-400">New words and phrases learnt</p>
  {#each wordPair as pair, i}
    <LearnPair word={pair.word} translation={pair.translation} key={i} />
  {/each}
</div>
