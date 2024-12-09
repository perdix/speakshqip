<script>
  export let title;
  export let description;
  export let id;
  export let xp;
</script>

<div class=" w-full">
  <div
    class="w-w-95/100 md:w-full md:rounded-lg ml-3 md:ml-0 md:rounded-l-none mb-3 mt-0 md:mt-3 md:mr-8 border-2 border-cd-black bg-zinc-800 text-white flex justify-center items-between rounded-lg rounded-t-none cursor-pointer flex-col transition-all hover:opacity-95"
  >
    <div
      class="banner mt-0 w-full p-5 h-60 flex justify-between items-start flex-col"
    >
      <div class=" flex justify-start items-start flex-col">
        <h1 class=" text-4xl font-bold">{title}</h1>
        <p class=" mt-6">
          {description}
        </p>
      </div>
      <div class=" flex justify-start items-center w-36 drop-shadow-2xl mt-3">
        <a href="/lessons/{id}">
          <button class="w-auto mb-3 bg-cd-red p-2 rounded-md text-white h-10">
            Start
          </button>
        </a>
        <div
          class="w-auto mb-3 border-2 border-yellow-300 p-2 rounded-md text-white items-center flex justify-center h-10 ml-3"
          style="box-shadow: 2px 0px 300px -59px yellow;"
        >
          <span class=" font-bold">{xp}</span>
          <i
            class="fa-solid text-yellow-300 fa-bolt ml-1"
            style="text-shadow: 0 0 10px yellow;"
          ></i>
        </div>
      </div>
    </div>
  </div>
</div>
