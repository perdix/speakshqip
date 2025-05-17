<script>
  import LearnWordVocab from "../../lib/components/LearnWordVocab.svelte";
  export let data;
  export let wordData = data.wordData;

  const batchSize = 30;
  let loadedCount = batchSize;

  function loadMore() {
    loadedCount += batchSize;
  }
  let isLoading = wordData.length === 0;
</script>

{#if isLoading}
  <div class="flex justify-center items-center h-screen">
    <i class="fas fa-spinner fa-spin text-5xl text-cd-red"></i>
  </div>
{:else}
  <div class="w-w-90/100 ml-auto mr-auto flex flex-col">
    <h1 class="text-4xl md:text-6xl font-bold mt-9 text-cd-black">
      Vocabulary <i class="fa-solid fa-book ml-2 text-cd-red"></i>
    </h1>

    <p class=" text-xl md:text-2xl md:font-bold mt-9">
      Take a look at the words you have learned up until now through your
      lessons.
    </p>

    <p
      class=" md:w-4/5 pointer-events-none p-4 bg-zinc-300 rounded-lg mt-4 font-bold text-zinc-500 flex justify-start items-center"
    >
      Click on a word to hear its pronunciation <i
        class="fa-solid fa-arrow-pointer ml-3 text-xl"
      ></i>
    </p>

    <p class="md:w-4/5 mt-4 p-4 rounded-lg bg-zinc-300 text-zinc-500">
      <span class=" font-bold">{wordData.length}</span> words learned
    </p>

    <h1 class=" mt-8 text-2xl font-bold">Your vocabulary</h1>

    <div
      class="flex justify-between md:justify-start items-center flex-wrap w-full mt-4 mb-3"
    >
      {#each wordData.slice(0, loadedCount) as { word, translation, audioUrl }}
        <LearnWordVocab word_al={word} word_en={translation} {audioUrl} />
      {/each}
    </div>

    {#if loadedCount < wordData.length}
      <button
        on:click={loadMore}
        class="mt-6 px-6 py-2 rounded bg-cd-red text-white font-bold self-center hover:bg-red-600 transition"
      >
        Load More
      </button>
    {/if}
  </div>
{/if}
