<script>
  import { useSound } from "svelte-sound";

  //const click_sound = useSound(data.publicUrl, ["click"]);

  export let letterUpperCase;
  export let letterLowerCase;


</script>

<button ><!-- use:click_sound-->

<div class="flex flex-wrap">
<div class="relative h-32 w-32 flex flex-col justify-center items-center border-2 border-cd-red rounded-md bg-white transition-colors duration-300 hover:bg-cd-red hover:text-white hover:cursor-pointer">
  <p class="text-4xl font-bold">{letterUpperCase}</p>
  <p class="text-gray-500 text-lg hover:text-white">{letterLowerCase}</p>
  <i class="fa-solid fa-music text-white text-xl absolute bottom-2 right-2"></i>
</div>
</div>
</button>