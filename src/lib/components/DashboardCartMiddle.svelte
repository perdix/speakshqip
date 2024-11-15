<script>
  export let xp;
  export let words;
</script>

<div
  class=" w-full md:w-2/8 flex flex-col justify-between items-center h-screen p-6"
>
  <!--Small Containers-->
  <div
    class=" relative flex w-full justify-between items-center flex-col md:flex-row"
  >
    <div
      class=" w-full md:w-80 bg-zinc-200 border-solid border-2 rounded-md border-zinc-300 p-5"
    >
      <h1>Daily Goal</h1>
      <div class=" flex justify-between items-center w-full mt-4">
        <h1 class=" text-sm">XP Progress</h1>
        <div class=" w-32 bg-gray-200 rounded-full dark:bg-gray-700">
          <div class="bg-cd-red h-3.5 rounded-full w-w-45/100"></div>
        </div>
        <h1 class=" text-sm">{xp}</h1>
      </div>
      <div class=" mt-4 h-44 bg-cd-black rounded-md"></div>
    </div>

    <div
      class=" w-full md:w-80 bg-zinc-200 border-solid border-2 rounded-md border-zinc-300 p-5 mt-4 md:mt-0"
    >
      <h1>Words learned</h1>
      <div class=" flex justify-between items-center w-full mt-4">
        <h1 class=" text-sm">Words</h1>
        <div class=" w-32 bg-gray-200 rounded-full dark:bg-gray-700">
          <div class="bg-cd-red h-3.5 rounded-full w-w-45/100"></div>
        </div>
        <h1 class=" text-sm">{words}</h1>
      </div>
      <div class=" mt-4 h-44 bg-cd-black rounded-md"></div>
    </div>
  </div>

  <!--Big Container-->
  <div
    class=" mt-4 w-full bg-zinc-200 border-solid border-2 rounded-md border-zinc-300 p-5"
  >
    <h1>Words learned</h1>
    <div class=" flex justify-between items-center w-full mt-4"></div>
    <div class=" mt-4 h-44 bg-cd-black rounded-md"></div>
  </div>
</div>
