<script>
    const alphabet = [
      ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)),
      ...Array(10).fill("") 
    ];
</script>

<div class="flex justify-center items-center min-h-screen p-4">
  <div class="grid grid-cols-6 gap-4">
    {#each alphabet as letter}
      <div class="relative h-32 w-32 flex flex-col justify-center items-center border-2 border-cd-red rounded-md bg-white transition-colors duration-300 hover:bg-cd-red hover:text-white hover:cursor-pointer">
        <p class="text-4xl font-bold">{letter}</p>
        <p class="text-gray-500 text-lg hover:text-white">{letter ? letter.toLowerCase() : ""}</p>
        <i class="fa-solid fa-music text-white text-xl absolute bottom-2 right-2"></i>
      </div>
    {/each}
  </div>
</div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
      integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
      crossorigin="anonymous" referrerpolicy="no-referrer" />
