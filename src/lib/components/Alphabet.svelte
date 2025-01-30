<script>
  export let alphabet;
  const audio = new Audio(alphabet.audioUrl);
</script>

<button on:click={() => audio.play()} on:hover>
  <div
    class="relative h-32 w-32 flex flex-col justify-center items-center border-2 border-cd-red rounded-md bg-white transition-colors
  duration-300 hover:bg-cd-red hover:text-white hover:cursor-pointer"
  >
    <p class="text-4xl font-bold">{alphabet.uppercase_letter}</p>
    <p class="text-gray-500 text-lg hover:text-white">
      {alphabet.lowercase_letter}
    </p>
    <i class="fa-solid fa-music text-white text-xl absolute bottom-2 right-2"
    ></i>
  </div>
</button>
