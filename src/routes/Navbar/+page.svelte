<script>
  import { page } from "$app/stores";
  import { enhance } from "$app/forms";
  import { onMount } from "svelte";

  /** @type {import('./$types').PageLoad} */

  let isNavOpen = false;
  let userDetails = {};

  function toggleNavbar() {
    isNavOpen = !isNavOpen;
  }

  function closeNavbar() {
    isNavOpen = false;
  }

  $: currentPage = $page.url.pathname;

  onMount(async () => {
    if ($page.data.session) {
      await getUserDetails($page.data.session.user.id);
    }
  });

  async function getUserDetails(id) {
    console.log($page.data.supabase);
    const { data, error } = await $page.data.supabase
      .from("userdetails")
      .select()
      .eq("id", id)
      .single();
    userDetails = data;
  }
</script>

<nav class="w-screen flex justify-between items-center p-3 bg-cd-red flex-row">
  <img src="logo.png" class="z-30 h-10 mr-3" alt="" />
  <h1 class="z-30 text-2xl font-extrabold text-white">SpeakShqip</h1>
  <div
    class="nav-burger cursor-pointer bg-cd-red block z-30 sm:hidden"
    on:click={toggleNavbar}
  >
    <div class="nav_line1 h-px m-1.5 w-4 bg-white"></div>
    <div class="nav_line2 h-px m-1.5 w-4 bg-white"></div>
  </div>
  <ul
    class="nav-menu flex absolute z-20 -top-full h-screen justify-center items-center w-screen left-0 text-white flex-col bg-cd-red sm:flex-row sm:bg-transparent sm:relative sm:h-11 sm:justify-end"
    class:opened={isNavOpen}
  >
    <li class="p-3 {currentPage === '/' ? 'font-bold' : ''}">
      <a href="/" on:click={closeNavbar}>Home</a>
    </li>
    <li class="p-3 {currentPage === '/about' ? 'font-bold' : ''}">
      <a href="/about" on:click={closeNavbar}>About</a>
    </li>
    <li class="mr-2 p-3">
      <a href="/learn" on:click={closeNavbar}>Learn</a>
    </li>
    <li class="p-3">
      {#if $page.data.session}
        <form action="/logout" method="POST">
          <button
            class="p-2 bg-white rounded-md text-zinc-800 flex items-center gap-2"
            type="submit"
            name="submit"
            id="submit"
            value="Log In"
          >
            <img
              src={userDetails.public_image_url}
              alt="profile"
              class="object-cover w-6 h-6 rounded-full"
            />
            Log Out</button
          >
        </form>
      {:else}
        <a href="/login" on:click={closeNavbar}>
          <button class="p-2 bg-white rounded-md text-zinc-800">Log In</button>
        </a>
      {/if}
    </li>
  </ul>
</nav>

<style>
  .nav-menu {
    transition: all 0.3s;
  }

  .nav-menu.opened {
    top: 0;
  }
</style>
