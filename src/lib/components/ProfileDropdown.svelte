<script>
  import { fly } from "svelte/transition";
  let isOpened = false;

  function openProfile() {
    isOpened = !isOpened;
  }
</script>

<div class="relative">
  <div
    class="p-8 bg-cd-black w-8 m-3 rounded-full cursor-pointer border-white border-1"
    id="pfp"
    on:click={openProfile}
  ></div>

  {#if isOpened}
    <div
      transition:fly={{ y: -10, duration: 200, opacity: 0 }}
      class="m-3 w-40 rounded-lg bg-cd-red flex justify-start drop-shadow-md items-center absolute right-0 shadow-lg"
      id="dropdownOptions"
    >
      <ul class="h-full w-full flex justify-around items-start flex-col">
        <li
          class="hover:bg-cd-black hover:cursor-pointer h-1/3 w-full p-2 text-white flex justify-start items-center rounded-t-lg"
        >
          <a href="/" class="w-full h-full flex items-center"
            ><i class="fa-solid fa-house text-white m-3"></i>Home</a
          >
        </li>
        <li
          class="hover:bg-cd-black transition-all hover:cursor-pointer h-1/3 w-full p-2 text-white flex justify-start items-center"
        >
          <a href="/about" class="w-full h-full flex items-center"
            ><i class="fa-solid fa-circle-info text-white m-3"></i>About</a
          >
        </li>
        <li
          class="hover:bg-cd-black transition-all hover:cursor-pointer h-1/3 w-full p-2 text-white flex justify-start items-center"
        >
          <a href="/learn" class="w-full h-full flex items-center"
            ><i class="fa-brands fa-leanpub m-3 text-white"></i>Learn</a
          >
        </li>
        <li
          class="hover:bg-cd-black transition-all hover:cursor-pointer h-1/3 w-full p-2 text-white flex justify-start items-center"
        >
          <a href="/profile" class="w-full h-full flex items-center"
            ><i class="fa-solid fa-user m-3 text-white"></i>Profile</a
          >
        </li>
        <li
          class="hover:bg-cd-black transition-all hover:cursor-pointer h-1/3 w-full p-2 text-white flex justify-start items-center rounded-b-lg"
        >
          <a href="/dashboard" class="w-full h-full flex items-center"
            ><i class="fa-solid fa-table-columns text-white m-3"
            ></i>Dashboard</a
          >
        </li>
      </ul>
    </div>
  {/if}
</div>
