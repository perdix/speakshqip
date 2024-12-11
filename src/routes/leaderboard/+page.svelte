<script>
  export let data;
</script>

<div
  class="w-full bg-red-50 mt-5 p-5 rounded-lg flex justify-center items-center flex-col border-2 border-cd-red shadow-md"
>
  <h1 class="text-3xl font-bold text-cd-red mb-4">Leaderboard</h1>
  <ul class="w-full list-none">
    {#each data.leaderboard as user, index}
      <li
        class="flex justify-between items-center bg-white border-2 border-gray-200 rounded-lg p-3 mt-2 shadow-sm transition hover:bg-gray-50"
      >
        <span class="font-bold text-lg flex"
          >{index + 1}
          <img
            class=" h-16 w-16 object-cover rounded-full"
            src={user.public_image_url}
            alt=""
          />
          {user.username}</span
        >
        <span class="text-yellow-500 font-medium">{user.xp} XP</span>
      </li>
    {/each}
  </ul>
</div>
