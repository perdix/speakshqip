

<script>
    import Numbers from "../../lib/components/Numbers.svelte";

export let data;
</script>


{#if data.error}
  <p class="error">{data.error}</p>
{:else}
  {#each data.numbersData as numbers}
    <Numbers numbersColumn={numbers.numbers_column} />
  {/each}
{/if}


