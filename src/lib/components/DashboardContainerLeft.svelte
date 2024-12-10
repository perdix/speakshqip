<script>
  export let xp;
</script>

<div
  class=" w-full p-3 rounded-lg flex justify-center items-center flex-col"
  style="box-shadow: 0 0 2px;"
>
  <div class=" h-20 w-20 rounded-full border-2 border-cd-red">.</div>
  <h1
    class=" mt-5 text-2xl font-semibold flex justify-around items-center w-1/2"
  >
    Username <a
      href="/profile"
      class="fa-solid fa-sliders mt-0.5 opacity-40 transition-all hover:opacity-30 text-xl"
    ></a>
  </h1>
  <div
    class="w-auto mb-3 border-2 border-yellow-300 p-2 rounded-md text-white items-center flex justify-center h-10 ml-3 mt-2"
    style="box-shadow: 2px 0px 300px -59px yellow;"
  >
    <span class=" font-bold text-yellow-300">{xp}</span>
    <i
      class="fa-solid text-yellow-300 fa-bolt ml-1"
      style="text-shadow: 0 0 10px yellow;"
    ></i>
  </div>
  <a
    href="/learn"
    class=" flex justify-start items-center p-2 rounded-md text-white transition-all bg-cd-red hover:opacity-80"
    ><p>Continute learning</p>
    <i class="fa-solid fa-arrow-right-long mt-0.5 ml-2"></i></a
  >
</div>
