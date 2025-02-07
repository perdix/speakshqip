<script>
  export let leaderboard = [];
</script>

<div
  class="w-full mt-3 lg:mt-0 p-5 rounded-lg flex justify-start items-start flex-col border-2 lg:ml-3"
>
  <h1 class="text-3xl font-bold text-cd-black mb-4">Leaderboard</h1>
  <ul class="w-full list-none">
    {#each leaderboard as user, index}
      <li
        class="flex justify-between items-center bg-white border-2 border-gray-200 rounded-lg p-3 mt-2 shadow-sm transition hover:bg-gray-50"
      >
        <span class="font-bold text-lg flex justify-center items-center"
          >{index + 1}
          <img
            class=" h-10 w-10 md:h-16 md:w-16 object-cover rounded-full ml-3 border-2 pointer-events-none"
            src={user.public_image_url}
            alt=""
          />
          <span class=" ml-3 text-zinc-600">{user.username}</span></span
        >
        <span class="text-zinc-300 font-medium"
          >{user.xp}
          <i class="fa-solid text-zinc-300 fa-bolt ml-1"></i></span
        >
      </li>
    {/each}
  </ul>
</div>
