<script>
    export let data;

    console.log(data);
</script>

<h1>My dashboard</h1>

<h2>Hello {data.session.user.email}</h2>

<hr />

{#each data.words as word}
    <p>{word.word_en}</p>
{/each}
