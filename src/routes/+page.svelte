<script>
  import InfoSection from "../lib/components/InfoSection.svelte";
  import QuoteSection from "../lib/components/QuoteSection.svelte";
  import tilt from "svelte-tilt";

  export let data;
</script>

<div class="flex justify-center">
  <h1 class="text-6xl font-bold mt-28 mr-48 ml-48 text-cd-black">
    SpeakShqip
  </h1>
</div>
<div use:tilt class="flex justify-center">
  <div
    class="h-[30rem] md:h-[40rem] lg:h-[50rem] rounded-3xl border-2 border-cd-red mt-9 w-4/5 flex justify-center items-center bg-center bg-cover"
    style="background-image: url('/graphics/fd.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;"
  ></div>
</div>


<p class="text-base text-center mt-10">
  Start your Albanian language journey with SpeakShqip.
</p>

<div class="flex justify-center mt-6">
  <a
    href="/learn"
    class="p-2 cursor-pointer bg-cd-red text-white text-center rounded-md transition-all hover:opacity-85"
  >
    Get Started
  </a>
</div>

<InfoSection></InfoSection>

<div class="mt-32">
  <QuoteSection></QuoteSection>
</div>

<!-- Sign Up CTA -->
<div class="flex justify-center h-60 flex-col items-center">
  <h1 class="text-4xl font-bold mt-9 md:text-6xl transition-all hover:opacity-85">
    Sign up today
  </h1>
</div>
<div class="flex justify-center">
  <a
    href="/learn"
    class="p-2 cursor-pointer bg-cd-red text-white text-center rounded-md shadow-lg transition-all hover:opacity-85"
  >
    Get Started
  </a>
</div>

<br /><br />

<!-- <ul>
  {#each data.words as word}
    <li>{word.word_al} - {word.word_en}</li>
  {/each}
</ul> -->
