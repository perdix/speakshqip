<script>
  import Numbers from "../../lib/components/Numbers.svelte";

  export let data;
</script>

<div class="w-w-90/100 ml-auto mr-auto flex flex-col">
  <h1 class="text-4xl md:text-6xl font-bold mt-9 text-cd-black">
    Numbers <i class="fa-solid fa-arrow-up-9-1 ml-2 text-cd-red"></i>
  </h1>
  <p class=" text-xl md:text-2xl md:font-bold mt-9">
    Take a look at the numbers in Albanian. You'll be frequently using them on
    your lessons.
  </p>
  <p
    class=" md:w-4/5 pointer-events-none p-4 bg-zinc-300 rounded-lg mt-4 font-bold text-zinc-500 flex justify-start items-center"
  >
    Click on a word to hear its pronunciation <i
      class="fa-solid fa-arrow-pointer ml-3 text-xl"
    ></i>
  </p>
  {#if data.error}
    <p class="text-cd-red">{data.error}</p>
  {:else}
    <div
      class="flex flex-wrap justify-between w-full items-center gap-2 mt-4 mb-2"
    >
      {#each data.numbersData as numbers}
        <button
          class=" rounded"
          on:click={() => {
            const audio = new Audio(numbers.audioUrl);
            audio.play();
          }}
        >
          <Numbers
            numbersColumn={numbers.numbers_column}
            numbersPronunciation={numbers.pronunciation}
          />
        </button>
      {/each}
    </div>
  {/if}
</div>
