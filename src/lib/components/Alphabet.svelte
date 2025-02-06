<script>
  export let alphabet;
  const audio = new Audio(alphabet.audioUrl);

  let isPulsing = false;

  function handleClick() {
    isPulsing = true;
    setTimeout(() => (isPulsing = false), 220);
  }
</script>

<button on:click={() => audio.play()} on:hover>
  <div
    on:click={handleClick}
    class:animate-pulse={isPulsing}
    class="bg-zinc-300 relative h-40 w-40 flex flex-col justify-center items-center rounded-md hover:cursor-pointer hover:opacity-85 transition-all"
  >
    <p class="text-4xl text-zinc-700 font-bold">{alphabet.uppercase_letter}</p>
    <p class="text-gray-500 text-lg">
      {alphabet.lowercase_letter}
    </p>
    <i class="fa-solid fa-volume-high text-zinc-500 text-xl mt-2"></i>
  </div>
</button>

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
