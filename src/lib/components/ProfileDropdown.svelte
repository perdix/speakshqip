<script>
  import { fly } from "svelte/transition";
  export let pfp;
  let isOpened = false;

  function openProfile() {
    isOpened = !isOpened;
  }

  function closeDropdown() {
    isOpened = false;
  }
</script>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
  integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>

<div class="relative z-50">
  <img
    src={pfp}
    class="p-7 bg-white h-4 rounded-full cursor-pointer border-white border-1"
    id="pfp"
    on:click={openProfile}
  />

  {#if isOpened}
    <div
      transition:fly={{ y: -10, duration: 200, opacity: 0 }}
      class="m-3 mt-5 w-40 rounded-lg bg-cd-red flex justify-start drop-shadow-md items-center absolute right-0 shadow-lg"
      id="dropdownOptions"
    >
      <ul class="h-full w-full flex justify-around items-start flex-col">
        <li
          class="hover:bg-cd-black hover:cursor-pointer h-1/3 w-full p-2 text-white flex justify-start items-center rounded-t-lg"
        >
          <a
            href="/"
            class="w-full h-full flex items-center"
            on:click={closeDropdown}
            ><i class="fa-solid fa-house text-white m-3"></i>Home</a
          >
        </li>
        <li
          class="hover:bg-cd-black transition-all hover:cursor-pointer h-1/3 w-full p-2 text-white flex justify-start items-center"
        >
          <a
            href="/about"
            class="w-full h-full flex items-center"
            on:click={closeDropdown}
            ><i class="fa-solid fa-circle-info text-white m-3"></i>About</a
          >
        </li>
        <li
          class="hover:bg-cd-black transition-all hover:cursor-pointer h-1/3 w-full p-2 text-white flex justify-start items-center"
        >
          <a
            href="/learn"
            class="w-full h-full flex items-center"
            on:click={closeDropdown}
            ><i class="fa-brands fa-leanpub m-3 text-white"></i>Learn</a
          >
        </li>
        <li
          class="hover:bg-cd-black transition-all hover:cursor-pointer h-1/3 w-full p-2 text-white flex justify-start items-center"
        >
          <a
            href="/dashboard"
            class="w-full h-full flex items-center"
            on:click={closeDropdown}
            ><i class="fa-solid fa-table-columns m-3 text-white"
            ></i>Dashboard</a
          >
        </li>
        <li
          class="hover:bg-cd-black transition-all hover:cursor-pointer h-1/3 w-full p-2 text-white flex justify-start items-center"
        >
          <a
            href="/profile"
            class="w-full h-full flex items-center"
            on:click={closeDropdown}
            ><i class="fa-solid fa-user text-white m-3"></i>Profile</a
          >
        </li>
        <li
          class="hover:bg-cd-black transition-all hover:cursor-pointer h-1/3 w-full p-2 text-white flex justify-start items-center rounded-b-lg"
        >
          <a
            href="/"
            class="w-full h-full flex items-center"
            on:click={closeDropdown}
            ><i class="fa-solid fa-arrow-right-from-bracket text-white m-3"
            ></i>Logout</a
          >
        </li>
      </ul>
    </div>
  {/if}
</div>
