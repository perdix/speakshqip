<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  let isNavOpen = false;

  function toggleNavbar() {
    isNavOpen = !isNavOpen;
  }

  function closeNavbar() {
    isNavOpen = false;
  }

  $: currentPage = $page.url.pathname;
</script>

<nav class="w-screen flex justify-between items-center p-3 bg-cd-red flex-row">
  <img src="logo.png" class="z-30 h-10 mr-3" alt="Logo" />
  <h1 class="z-30 text-2xl font-extrabold text-white">SpeakShqip</h1>
  <div class="nav-burger cursor-pointer bg-cd-red block z-30 sm:hidden" on:click={toggleNavbar}>
    <div class="nav_line1 h-px m-1.5 w-4 bg-white"></div>
    <div class="nav_line2 h-px m-1.5 w-4 bg-white"></div>
  </div>
  <ul class="nav-menu flex absolute z-20 -top-full h-screen justify-center items-center w-screen left-0 text-white flex-col bg-cd-red sm:flex-row sm:bg-transparent sm:relative sm:h-11 sm:justify-end" class:opened={isNavOpen}>
    <li class="p-3 {currentPage === '/' ? 'font-bold' : ''}"><a href="/" on:click={closeNavbar}>Home</a></li>
    <li class="p-3 {currentPage === '/about' ? 'font-bold' : ''}"><a href="/about" on:click={closeNavbar}>About</a></li>
    <li class="p-3 {currentPage === '/blog' ? 'font-bold' : ''}"><a href="/blog" on:click={closeNavbar}>Blog</a></li>
    <li class="p-3 {currentPage === '/contact' ? 'font-bold' : ''}"><a href="/contact" on:click={closeNavbar}>Contact</a></li>
    {#if $page.data.session}
      <li class="p-3 {currentPage === '/learn' ? 'font-bold' : ''}"><a href="/learn" on:click={closeNavbar}>Learn</a></li>
      <li class="p-3 {currentPage === '/profile' ? 'font-bold' : ''}"><a href="/profile" on:click={closeNavbar}>Profile</a></li>
      <li class="p-3 {currentPage === '/dashboard' ? 'font-bold' : ''}"><a href="/dashboard" on:click={closeNavbar}>Dashboard</a></li>
      <li class="p-3 {currentPage === '/leaderboard' ? 'font-bold' : ''}"><a href="/leaderboard" on:click={closeNavbar}>Leaderboard</a></li>
      <li class="p-3">
        <form action="/logout" method="POST">
          <button class="p-2 bg-white rounded-md text-zinc-800 flex items-center gap-2" type="submit">
            {#if $page.data.userDetails?.public_image_url}
              <img src={$page.data.userDetails.public_image_url} alt="profile" class="object-cover w-6 h-6 rounded-full" />
            {:else}
              <div class="rounded-full w-6 h-6 bg-gray-200">
                <img src="pfp.webp" alt="" />
              </div>
            {/if}
            Log Out
          </button>
        </form>
      </li>
    {:else}
      <li class="p-3"><a href="/login" on:click={closeNavbar}><button class="p-2 bg-white rounded-md text-zinc-800">Log In</button></a></li>
    {/if}
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
