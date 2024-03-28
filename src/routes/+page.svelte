<script>
  export let data;
</script>

<h1>Welcome to SpeakShqip!!!!!!</h1>

<ul>
  {#each data.words as word}
    <li>{word.word_al} - {word.word_en}</li>
  {/each}
</ul>
