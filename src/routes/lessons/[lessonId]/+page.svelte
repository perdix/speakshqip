<script lang="js">
  export let data;

</script>

<h1>Hello</h1>
{#each data.info as info}
<h1>
{info.informationHeader}
</h1>
<p>
    {info.informationBody}
</p>
{/each}