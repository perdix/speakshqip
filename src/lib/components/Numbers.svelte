<script>
  import { useSound } from "svelte-sound";

  //const click_sound = useSound(data.publicUrl, ["click"]);

  export let numbersColumn;
  export let numbersPronunciation;


</script>

<button ><!-- use:click_sound-->

<div class="flex flex-wrap">
<div class="relative h-32 w-32 flex flex-col justify-center items-center border-2 border-cd-red rounded-md bg-white transition-colors duration-300 hover:bg-cd-red hover:text-white hover:cursor-pointer">
  <p class="text-4xl font-bold">{numbersColumn}</p>
  <p class="text-gray-500 text-lg hover:text-white">{numbersPronunciation}</p>
  <i class="fa-solid fa-music text-white text-xl absolute bottom-2 right-2"></i>
</div>
</div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
      integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
      crossorigin="anonymous" referrerpolicy="no-referrer" />
</button>