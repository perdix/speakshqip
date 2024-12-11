<script>
  export let xp;
  export let username;
  export let pfp;
  export let level;
</script>

<div
  class=" w-full p-3 rounded-lg flex justify-center items-center flex-col border-2"
>
  <div class=" flex w-full justify-center items-center">
    <div
      class=" h-20 w-20 rounded-full border-2 object-cover bg-center bg-cover"
      style="background-image: url({pfp});"
    ></div>
  </div>
  <h1
    class=" mt-2 text-2xl font-semibold flex justify-center items-center w-1/2"
  >
    {username}
  </h1>
  <div class=" w-full mx-auto">
    <div
      class="w-1/2 mx-auto mt-5 flex justify-center items-center p-2 rounded-md text-white transition-all border-2 border-yellow-300 hover:opacity-80"
      style="box-shadow: 2px 0px 300px -59px yellow;"
    >
      <span class=" font-bold text-yellow-300">{xp}</span>
      <i
        class="fa-solid text-yellow-300 fa-bolt ml-1"
        style="text-shadow: 0 0 10px yellow;"
      ></i>
    </div>
    <div
      class="w-1/2 mx-auto mt-2 flex justify-center items-center p-2 rounded-md text-white transition-all border-2 border-cd-red hover:opacity-80"
      style="box-shadow: 2px 0px 300px -59px red;"
    >
      <span class=" font-bold text-cd-red">Level {level}</span>
      <i class="fa-solid fa-layer-group text-cd-red ml-1"></i>
    </div>
    <a href="/profile">
      <button
        class="w-1/2 mx-auto mt-2 flex justify-center items-center p-2 rounded-md text-white transition-all border-2 border-cd-red bg-cd-red hover:opacity-80"
        style="box-shadow: 2px 0px 300px -59px red;"
      >
        <span class=" font-bold">Edit profile</span>
        <i class="fa-solid fa-user ml-1"></i>
      </button></a
    >
  </div>
</div>
