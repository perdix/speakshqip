<script>
  import DashboardCartLeft from "../../lib/components/DashboardCartLeft.svelte";
  import DashboardCartMiddle from "../../lib/components/DashboardCartMiddle.svelte";
  import DashboardCartRight from "../../lib/components/DashboardCartRight.svelte";

  export let data;
</script>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
  integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>

<div class="flex w-full justify-center items-center flex-col md:flex-row">
  <DashboardCartLeft />
  <DashboardCartMiddle />
  <DashboardCartRight />
</div>
