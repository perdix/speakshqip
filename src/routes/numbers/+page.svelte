

<script>
    import Numbers from "../../lib/components/Numbers.svelte";

export let data;
</script>


{#each data.numberData as numbers}
<Numbers numbersColumn={numbers.numbers_column} />

{/each}


