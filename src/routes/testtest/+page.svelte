<script>
  let isOpened = false;

  function openProfile() {
    isOpened = !isOpened;
  }
</script>

<div>
  <div
    class="p-8 bg-red-500 w-8 m-3 rounded-full cursor-pointer border-white border-2"
    id="pfp"
    on:click={openProfile}
  ></div>

  <div
    class={!isOpened
      ? "hidden"
      : " m-3 w-40 rounded-lg h-40 bg-slate-600 flex justify-start items-center"}
    id="dropdownOptions"
  >
    <ul
      class="h-full w-full flex justify-around items-start flex-col transition-all"
    >
      <li
        class="hover:bg-slate-400 hover:cursor-pointer hover:transition-all h-1/3 w-full p-2 text-white relative flex justify-start items-center rounded-t-lg"
      >
        <a href="#" class="w-full h-full flex items-center">Test</a>
      </li>
      <li
        class="hover:bg-slate-400 hover:cursor-pointer hover:transition-all h-1/3 w-full p-2 text-white relative flex justify-start items-center"
      >
        <a href="#" class="w-full h-full flex items-center">Test</a>
      </li>
      <li
        class="hover:bg-slate-400 hover:cursor-pointer hover:transition-all h-1/3 w-full p-2 text-white relative flex justify-start items-center rounded-b-lg"
      >
        <a href="#" class="w-full h-full flex items-center">Log Out</a>
      </li>
    </ul>
  </div>
</div>
