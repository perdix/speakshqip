<script>
  import { useSound } from "svelte-sound";
  import test from "./test.m4a";
  const click_sound = useSound(test, ["click"]);

  let isPulsing = false;
  function handleClick() {
    isPulsing = true;
    setTimeout(() => (isPulsing = false), 200);
  }
</script>

<button use:click_sound on:click={handleClick} class={isPulsing ? "pulse" : ""}>
  <div
    class=" mr-1 mb-1 mt-1 h-32 w-36 bg-zinc-300 rounded-xl flex justify-between items-start flex-col p-7 text-zinc-500 cursor-pointer transition-all hover:opacity-85"
  >
    <h1 class="font-bold text-3xl">Fjalë</h1>
    <p class="flex items-center justify-between w-full text-xl">
      Word <i class="fa-solid fa-volume-high"></i>
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
