<script>
    export let data;
</script>

<h1>My dashboard</h1>

<hr />

{#each data.words as word}
    <p>{word.word_en}</p>
{/each}
