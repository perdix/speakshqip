

<script>
    import Alphabet from "../../lib/components/Alphabet.svelte";

export let data;
</script>


{#each data.alphabetData as alphabet}
<Alphabet letterUpperCase={alphabet.uppercase_letter} />

{/each}


