<script>
  import DashboardContainerLeft from "../../lib/components/DashboardContainerLeft.svelte";

  export let data;
</script>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
  integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>

<div class=" mx-3 mt-2 h-screen flex justify-start items-center flex-col">
  <DashboardContainerLeft xp={data.userDetails.xp} />
</div>
