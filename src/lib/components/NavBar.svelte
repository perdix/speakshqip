<nav
  class="w-screen flex justify-between items-center p-3 bg-zinc-800 flex-row"
>
  <a class=" z-50 text-2xl font-extrabold text-white no-underline" href="/"
    >SpeakShqip</a
  >
  <div class="nav-burger cursor-pointer bg-zinc-800 block z-50 sm:hidden">
    <div class="nav__line1 h-px m-1.5 w-4 bg-white"></div>
    <div class="nav__line2 h-px m-1.5 w-4 bg-white"></div>
  </div>
  <ul
    class="flex fixed -top-full h-screen justify-center items-center w-screen left-0 z-40 text-white flex-col bg-zinc-800 sm:flex-row sm:bg-transparent sm:relative sm:h-11 sm:justify-end"
  >
    <li class="p-3"><a href="/">Home</a></li>
    <li class="p-3"><a href="/about">About</a></li>
    <li class="p-3"><a href="/dashboard">Learn</a></li>
    <li class="p-3">
      <a href="/login">
        <button class="p-2 bg-white rounded-md text-zinc-800">Login</button>
      </a>
    </li>
  </ul>
</nav>
