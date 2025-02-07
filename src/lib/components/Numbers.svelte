<script>
  export let numbersColumn;
  export let numbersPronunciation;

  let isPulsing = false;

  function handleClick() {
    isPulsing = true;
    setTimeout(() => (isPulsing = false), 220);
  }
</script>

<div class="flex">
  <div
    class="bg-zinc-300 relative h-40 w-40 flex flex-col justify-center items-center rounded-md hover:cursor-pointer hover:opacity-85 transition-all"
    on:click={handleClick}
    class:animate-pulse={isPulsing}
  >
    <p class="text-4xl text-zinc-700 font-bold">{numbersColumn}</p>
    <p class="text-gray-500 text-lg">{numbersPronunciation}</p>
    <i class="fa-solid fa-volume-high text-zinc-500 text-xl mt-2"></i>
  </div>
</div>

<style>
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }

  .animate-pulse {
    animation: pulse 0.2s ease-in-out;
  }
</style>
