<script>
  import Alphabet from "../../lib/components/Alphabet.svelte";
  export let data;
</script>

<div class="w-w-90/100 ml-auto mr-auto flex flex-col">
  <h1 class="text-4xl md:text-6xl font-bold mt-9 text-cd-black">
    Alphabet <i class="fa-solid fa-font ml-2 text-cd-red"></i>
  </h1>
  <p class=" text-xl md:text-2xl md:font-bold mt-9">
    Take a look at the albanian Alphabet.
  </p>
  <p
    class=" md:w-4/5 pointer-events-none p-4 bg-zinc-300 rounded-lg mt-4 font-bold text-zinc-500 flex justify-start items-center"
  >
    Click on a letter to hear its pronunciation <i
      class="fa-solid fa-arrow-pointer ml-3 text-xl"
    ></i>
  </p>
  {#if data.error}
    <p class="text-cd-red">{data.error}</p>
  {:else}
    <div
      class="flex flex-wrap justify-between items-center gap-2 mt-4 md:p-0 mb-2"
    >
      {#each data.alphabetData as alphabet}
        <Alphabet {alphabet} />
      {/each}
    </div>
  {/if}
</div>
