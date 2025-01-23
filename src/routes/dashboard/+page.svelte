<script>
  import DashboardContainerLeft from "../../lib/components/DashboardContainerLeft.svelte";
  import DashboardContainerMiddle from "../../lib/components/DashboardContainerMiddle.svelte";
  import DashboardLeaderboardRight from "../../lib/components/DashboardLeaderboardRight.svelte";

  export let data;
  const { words, leaderboard } = data; 
</script>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
  integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>

{#if data.userDetails.role === "Admin"}
  <header class="bg-red-500 text-white p-6 flex flex-col md:flex-row md:justify-between items-center shadow-md">
    <div class="mb-4 md:mb-0">
      <h1 class="text-2xl font-bold">Hello, {data.userDetails.username}!</h1>
      <p class="text-sm md:text-base">Welcome to the Admin Dashboard. You can manage users and edit lessons from here.</p>
    </div>

    <nav class="flex space-x-4">
      <a 
        href="/usereditor" 
        class="px-4 py-2 bg-white text-red-600 hover:bg-red-100 rounded-lg font-medium shadow transition"
      >
        User Editor
      </a>
      <a 
        href="/lessonseditor" 
        class="px-4 py-2 bg-white text-red-600 hover:bg-red-100 rounded-lg font-medium shadow transition"
      >
        Lessons Editor
      </a>
    </nav>
  </header>
{/if}


<div class=" m-5 flex flex-col md:flex-row">
  <DashboardContainerLeft
    pfp={data.userDetails.public_image_url}
    username={data.userDetails.username}
    xp={data.userDetails.xp}
    level={data.userDetails.level}
  />
  <DashboardContainerMiddle />
  <DashboardLeaderboardRight {leaderboard}/>
</div>
