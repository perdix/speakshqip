<script>
  export let data;
  export let form = {};

  console.log(data);

  let edit = false;

  function toggleEdit() {
    edit = !edit; // toggle the edit variable
  }

  console.log(data);
</script>

<div class="flex flex-col m-3">
  {#each data.userDetails as user}
    <label class="mb-4 flex items-center">
      Username
      <input
        class={!edit
          ? "bg-zinc-100 p-3 rounded-md ml-auto w-64 transition-all"
          : "bg-zinc-200 p-3 rounded-md ml-auto w-64 transition-all"}
        type="text"
        value={user.username}
        disabled={!edit}
      />
    </label>

    <label class="mb-4 flex items-center">
      Bio
      <input
        class={!edit
          ? "bg-zinc-100 p-3 rounded-md ml-auto w-64 transition-all"
          : "bg-zinc-200 p-3 rounded-md ml-auto w-64 transition-all"}
        type="text"
        value={user.bio}
        disabled={!edit}
      />
    </label>

    <label class="mb-4 flex items-center">
      User XP
      <input
        class={!edit
          ? "bg-zinc-100 p-3 rounded-md ml-auto w-64 transition-all"
          : "bg-zinc-200 p-3 rounded-md ml-auto w-64 transition-all"}
        type="text"
        value={user.xp}
        disabled={!edit}
      />
    </label>

    <label class="mb-4 flex items-center">
      Level
      <input
        class={!edit
          ? "bg-zinc-100 p-3 rounded-md ml-auto w-64 transition-all"
          : "bg-zinc-200 p-3 rounded-md ml-auto w-64 transition-all"}
        type="text"
        value={user.level}
        disabled={!edit}
      />
    </label>

    <label class="mb-4 flex items-center">
      Age
      <input
        class={!edit
          ? "bg-zinc-100 p-3 rounded-md ml-auto w-64 transition-all"
          : "bg-zinc-200 p-3 rounded-md ml-auto w-64 transition-all"}
        type="text"
        value={user.age}
        disabled={!edit}
      />
    </label>

    <label class="mb-4 flex items-center">
      Nationality
      <input
        class={!edit
          ? "bg-zinc-100 p-3 rounded-md ml-auto w-64 transition-all"
          : "bg-zinc-200 p-3 rounded-md ml-auto w-64 transition-all"}
        type="text"
        value={user.nationality}
        disabled={!edit}
      />
    </label>
  {/each}
  <button
    class="p-2 w-64 bg-red-500 text-white rounded-md m-3"
    on:click={toggleEdit}
  >
    {edit ? "Save" : "Edit"}
  </button>
</div>
