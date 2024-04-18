<script>
  import InfoSection from "../lib/components/InfoSection.svelte";
  import QuoteSection from "../lib/components/QuoteSection.svelte";

  export let data;
</script>

<div class="flex justify-center">
  <h1 class=" text-6xl font-bold mt-36 mr-48 ml-48">SpeakShqip</h1>
</div>

<div class="flex justify-center">
  <div
    class="rounded-3xl bg-zinc-900 ml-auto mr-auto mt-9 h-52 w-80 sm:h-60"
  ></div>
</div>

<p class=" text-base text-center mt-10">
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim natus, sapiente
  fugiat quidem voluptates tempora hic voluptatum
</p>

<div class="flex justify-center mt-6">
  <a
    href="#"
    class="p-2 cursor-pointer bg-zinc-900 text-white text-center rounded-md transition-all hover:opacity-85"
    >Get Started</a
  >
</div>

<InfoSection></InfoSection>
<QuoteSection></QuoteSection>

<!--Sign Up CTA-->
<div class="flex justify-center h-60 flex-col items-center">
  <h1
    class=" text-4xl font-bold mt-9 md:text-6xl transition-all hover:opacity-85"
  >
    Sign up today
  </h1>
</div>
<div class="flex justify-center">
  <a
    href="#"
    class="p-2 cursor-pointer bg-zinc-900 text-white text-center rounded-md shadow-lg transition-all hover:opacity-85"
    >Get Started</a
  >
</div>
<br /><br />

<!-- <ul>
  {#each data.words as word}
    <li>{word.word_al} - {word.word_en}</li>
  {/each}
</ul> -->
