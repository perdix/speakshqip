<script>
  import DashboardContainerLeft from "../../lib/components/DashboardContainerLeft.svelte";
  import DashboardContainerMiddle from "../../lib/components/DashboardContainerMiddle.svelte";
  import DashboardLeaderboardRight from "../../lib/components/DashboardLeaderboardRight.svelte";
  import Leaderboard from "../leaderboard/+page.svelte";

  export let data;
</script>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
  integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>

<div class=" m-5 flex flex-col md:flex-row">
  <DashboardContainerLeft
    pfp={data.userDetails.public_image_url}
    username={data.userDetails.username}
    xp={data.userDetails.xp}
    level={data.userDetails.level}
  />
  <DashboardContainerMiddle />
</div>
