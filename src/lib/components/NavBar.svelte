<nav
  class="w-screen flex justify-between items-center p-3 bg-zinc-800 flex-row"
>
  <h1 class="z-10 text-2xl font-extrabold text-white">SpeakShqip</h1>
  <div
    class="nav-burger cursor-pointer bg-zinc-800 block z-10 sm:hidden"
    on:click={toggleNavbar}
  >
    <div class="nav__line1 h-px m-1.5 w-4 bg-white"></div>
    <div class="nav__line2 h-px m-1.5 w-4 bg-white"></div>
  </div>
  <ul
    class="flex absolute -top-full h-screen justify-center items-center w-screen left-0 text-white flex-col bg-zinc-900 sm:flex-row sm:bg-transparent sm:relative sm:h-11 sm:justify-end"
  >
    <li class="p-3"><a href="#">Home</a></li>
    <li class="p-3"><a href="/about">About</a></li>
    <li class="mr-2 p-3"><a href="/login">Learn</a></li>
    <li class="mr-2 p-3"><a href="src\routes\login\+page.svelte">Login</a></li>
    <li class="p-3">
      <a href="#">
        <button class="p-2 bg-white rounded-md text-zinc-800">Contact</button>
      </a>
    </li>
  </ul>
</nav>
