<script>
  export let unitDescription;
  export let unitName;
</script>

<div class="relative rounded-md p-4 overflow-hidden">
  <div
    class="absolute inset-0 bg-cover bg-center bg-no-repeat bg-zinc-300"
  ></div>

  <div class="relative z-10">
    <h1 class="text-3xl font-semibold text-center">
      <span class="text-cd-red">{unitName}</span>
    </h1>
    <h1 class="text-1xl font-semibold mt-3">{unitDescription}</h1>

    <div class="flex flex-col space-y-3 mt-3">
      <div class="flex items-center bg-zinc-200 p-3 rounded-md shadow-md">
        <div
          class="bg-cd-red h-11 w-11 rounded-full flex justify-center items-center"
        >
          <i class="fa-solid fa-info text-white"></i>
        </div>
        <p class="font-bold ml-3">Info Cards</p>
      </div>

      <div class="flex items-center bg-zinc-200 p-3 rounded-md shadow-md">
        <div
          class="bg-cd-red h-11 w-11 rounded-full flex justify-center items-center"
        >
          <i class="fa-solid fa-comments text-white"></i>
        </div>
        <p class="font-bold ml-3">Example Cards</p>
      </div>

      <div class="flex items-center bg-zinc-200 p-3 rounded-md shadow-md">
        <div
          class="bg-cd-red h-11 w-11 rounded-full flex justify-center items-center"
        >
          <i class="fa-solid fa-question text-white"></i>
        </div>
        <p class="font-bold ml-3">Quiz</p>
      </div>
    </div>
  </div>
</div>
