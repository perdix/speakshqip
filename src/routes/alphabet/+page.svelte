<script>
  import { useSound } from "svelte-sound";
  import Alphabet from "../../lib/components/Alphabet.svelte";

  export let data;
  const click_sound = useSound(data.publicUrl, ["click"]);
</script>

{#if data.error}
<p class="text-red-500">{data.error}</p>
{:else}
<div class="flex flex-wrap justify-evenly items-center gap-4 p-4">
  {#each data.alphabetData as alphabet}
    <button use:click_sound class="px-4 py-2 rounded">
      <Alphabet 
        letterUpperCase={alphabet.uppercase_letter} 
        letterLowerCase={alphabet.lowercase_letter}
      />
    </button>
  {/each}
</div>
{/if}

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
      integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
      crossorigin="anonymous" referrerpolicy="no-referrer" />