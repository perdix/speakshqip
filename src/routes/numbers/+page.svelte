<script>
  import Numbers from "../../lib/components/Numbers.svelte";
  import { useSound,sound } from "svelte-sound";

  export let data;
</script>

{#if data.error}
<p class="text-red-500">{data.error}</p>
{:else}
<div class="flex flex-wrap justify-evenly items-center gap-4 p-4">
  {#each data.numbersData as numbers}
    <button  use:sound={{ src: numbers.audioUrl, events: ["click"] }} class="px-4 py-2 rounded">
      <Numbers numbersColumn={numbers.numbers_column} numbersPronunciation={numbers.pronunciation} />
    </button>
  {/each}
</div>
{/if}

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
      integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
      crossorigin="anonymous" referrerpolicy="no-referrer" />
