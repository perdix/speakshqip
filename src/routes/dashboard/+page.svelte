<script>
  import DashboardContainerLeft from "../../lib/components/DashboardContainerLeft.svelte";
  import DashboardContainerMiddle from "../../lib/components/DashboardContainerMiddle.svelte";
  import DashboardLeaderboardRight from "../../lib/components/DashboardLeaderboardRight.svelte";

  export let data;


  const { words, leaderboard,progress,totalLessons } = data;

</script>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
  integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>

{#if data.userDetails.role === "Admin"}
<header class="bg-gradient-to-r from-red-600 to-red-500 m-5 rounded-xl text-white p-8 shadow-lg transform transition-all">
  <div class="max-w-7xl mx-auto">
    <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
      <!-- Left side - Welcome message -->
      <div class="space-y-3">
        <h1 class="text-3xl font-bold tracking-tight">
          Hello, {data.userDetails.username}! 👋
        </h1>
        <p class="text-red-100 text-lg">
          Welcome to the Admin Dashboard. You can manage users and edit lessons from here.
        </p>
      </div>
      
      <!-- Right side - Navigation buttons -->
      <nav class="flex flex-col md:flex-row gap-3">
        <a 
          href="/usereditor"
          class="flex items-center justify-center px-5 py-3 bg-white text-red-600 hover:bg-red-50 rounded-lg font-semibold shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md"
        >
          <i class="fas fa-users mr-2"></i>
          User Editor
        </a>
        <a 
          href="/lessonseditor"
          class="flex items-center justify-center px-5 py-3 bg-white text-red-600 hover:bg-red-50 rounded-lg font-semibold shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md"
        >
          <i class="fas fa-book mr-2"></i>
          Lessons Editor
        </a>
        <a 
          href="/blog"
          class="flex items-center justify-center px-5 py-3 bg-white text-red-600 hover:bg-red-50 rounded-lg font-semibold shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md"
        >
          <i class="fas fa-pen-to-square mr-2"></i>
          Create Blog Article
        </a>
      </nav>
    </div>
  </div>
</header>

{/if}

<div class=" m-5 flex flex-col lg:flex-row">
  <DashboardContainerLeft
    pfp={data.userDetails.public_image_url}
    username={data.userDetails.username}
    xp={data.userDetails.xp}
    level={data.userDetails.level}
  />
  <DashboardContainerMiddle count={data.unitCount} description={data.unitDescription} unitName={data.currentUnit} user={data.userDetails.username} progress={data.progress} totalLessons={data.totalLessons} />

  <DashboardLeaderboardRight {leaderboard} />
</div>
