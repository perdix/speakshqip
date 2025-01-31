<script>
  import { useSound } from "svelte-sound";
  import test from "./test.m4a";
  export let word_al;
  export let word_en;


  const click_sound = useSound(test, ["click"]);

  let isPulsing = false;
  function handleClick() {
    isPulsing = true;
    setTimeout(() => (isPulsing = false), 200);
  }
</script>
<button
  use:click_sound
  on:click={handleClick}
  class={`relative w-full border-2 border-red-500 rounded-xl transition-all ${
    isPulsing ? "pulse" : "hover:scale-[1.02]"
  } focus:outline-none focus-visible:ring-4 focus-visible:ring-red-400 focus-visible:ring-opacity-50 my-3`}
>
  <div
    class="w-full flex items-center justify-between bg-white rounded-xl p-5 text-zinc-600 cursor-pointer shadow-md hover:shadow-lg transition-all"
  >
    <h1 class="font-bold text-lg truncate text-red-500">{word_al}</h1>
    <p class="flex items-center text-base">
      {word_en} <i class="fa-solid fa-volume-high ml-2"></i>
    </p>
  </div>
</button>



<style>
  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.9);
    }
  }
  .pulse {
    animation: pulse 0.15s ease-in-out;
  }
</style>
