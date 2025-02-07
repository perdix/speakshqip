<script>
  export let data;
</script>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
  integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>

<div class="w-w-90/100 ml-auto mr-auto flex flex-col mb-3">
  <h1 class="text-4xl md:text-6xl font-bold mt-9 text-cd-black">
    Leaderboard <i class="fa-solid fa-server ml-2 text-cd-red"></i>
  </h1>
  <p class=" text-xl md:text-2xl md:font-bold mt-9">
    Gather XP points by completing lessons and quizzes. <br /> <br /> Compete with
    others to be at the top of the leaderboard.
  </p>
  <ul class="w-full list-none mt-3">
    {#each data.leaderboard as user, index}
      <li
        class="flex justify-between items-center bg-white border-2 border-gray-200 rounded-lg p-3 mt-2 shadow-sm transition hover:bg-gray-50"
      >
        <span class="font-bold text-lg flex justify-center items-center"
          >{index + 1}
          <img
            class=" h-10 w-10 object-cover rounded-full ml-3 border-2"
            src={user.public_image_url}
            alt=""
          />
          <span class=" ml-3 text-zinc-600">{user.username}</span></span
        >
        <span class="text-zinc-300 font-medium"
          >{user.xp}
          <i
            class="fa-solid text-yellow-300 fa-bolt ml-1"
            style="filter: drop-shadow(0px 0px 10px yellow);"
          ></i></span
        >
      </li>
    {/each}
  </ul>
</div>
