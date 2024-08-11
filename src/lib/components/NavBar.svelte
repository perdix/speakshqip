<script>


  let isNavOpen = false;

  function toggleNavbar() {
    isNavOpen = !isNavOpen;
  }

  function closeNavbar() {
    isNavOpen = false;
  }

</script>

<nav class="w-screen flex justify-between items-center p-3 bg-cd-red flex-row">
  <img src="logo.png" class="z-30 h-10 mr-3" alt="" />
  <h1 class="z-30 text-2xl font-extrabold text-white">SpeakShqip</h1>
  <div
    class="nav-burger cursor-pointer bg-cd-red block z-30 sm:hidden"
    on:click={toggleNavbar}>
    <div class="nav_line1 h-px m-1.5 w-4 bg-white"></div>
    <div class="nav_line2 h-px m-1.5 w-4 bg-white"></div>
  </div>
  <ul
    class="nav-menu flex absolute z-20 -top-full h-screen justify-center items-center w-screen left-0 text-white flex-col bg-cd-red sm:flex-row sm:bg-transparent sm:relative sm:h-11 sm:justify-end"
    class:opened={isNavOpen}
  >
    <li class="p-3"><a href="/" on:click={closeNavbar}>Home</a></li>
    <li class="p-3"><a href="/about" on:click={closeNavbar}>About</a></li>
    <li class="mr-2 p-3"><a href="/lessons" on:click={closeNavbar}>Learn</a></li>
    <li class="mr-2 p-3"><a href="/contact" on:click={closeNavbar}>Contact</a></li>
    <li class="p-3">
      <a href="/contact" on:click={closeNavbar}>
      
        <a href="/login">
          <button class="p-2 bg-white rounded-md text-zinc-800">Login</button>
        </a>
      </a>
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
