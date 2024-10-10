<script>
  import { enhance } from "$app/forms";
  export let data;
  export let form;
  let edit = false;

  function toggleEdit() {
    edit = !edit;
    console.log(edit);
  }
</script>

<div class=" w-full flex justify-center items-center">
  <form
    class="flex justify-center flex-col m-3"
    action={edit ? "?/editUser" : ""}
    use:enhance
    method="POST"
  >
    <div
      class=" cursor-pointer bg-cd-red h-24 w-24 rounded-full ml-auto mr-auto m-5 flex justify-center items-center"
    >
      <img src="pfp.webp" alt="" />
    </div>
    <div class="flex items-center mb-4">
      <label class="w-32">Username</label>
      <input
        class={!edit
          ? "bg-zinc-100 p-3 rounded-md w-64 transition-all"
          : "bg-zinc-200 p-3 rounded-md w-64 transition-all"}
        type="text"
        bind:value={data.userDetails[0].username}
        disabled={!edit}
        name="username"
      />
    </div>

    <div class="flex items-center mb-4">
      <label class="w-32">Bio</label>
      <input
        class={!edit
          ? "bg-zinc-100 p-3 rounded-md w-64 transition-all"
          : "bg-zinc-200 p-3 rounded-md w-64 transition-all"}
        type="text"
        bind:value={data.userDetails[0].bio}
        disabled={!edit}
        name="bio"
      />
    </div>

    <div class="flex items-center mb-4">
      <label class="w-32">User XP</label>
      <input
        class="bg-zinc-100 p-3 rounded-md w-64 transition-all"
        type="text"
        bind:value={data.userDetails[0].xp}
        disabled
      />
    </div>

    <div class="flex items-center mb-4">
      <label class="w-32">Level</label>
      <input
        class="bg-zinc-100 p-3 rounded-md w-64 transition-all"
        type="text"
        bind:value={data.userDetails[0].level}
        disabled
      />
    </div>

    <div class="flex items-center mb-4">
      <label class="w-32">Age</label>
      <input
        class={!edit
          ? "bg-zinc-100 p-3 rounded-md w-64 transition-all"
          : "bg-zinc-200 p-3 rounded-md w-64 transition-all"}
        type="text"
        bind:value={data.userDetails[0].age}
        disabled={!edit}
        name="age"
      />
    </div>

    <div class="flex items-center mb-4">
      <label class="w-32">Nationality</label>
      <input
        class={!edit
          ? "bg-zinc-100 p-3 rounded-md w-64 transition-all"
          : "bg-zinc-200 p-3 rounded-md w-64 transition-all"}
        type="text"
        bind:value={data.userDetails[0].nationality}
        disabled={!edit}
        list="nationality-list"
        name="nationality"
      />
    </div>

    <input type="hidden" name="user_id" value={data.session.user.id} />

    <button
      class="p-2 w-64 bg-cd-red text-white rounded-md m-3"
      type={edit ? "submit" : "button"}
      on:click={toggleEdit}
    >
      {edit ? "Save" : "Edit"}
    </button>
  </form>
</div>

<datalist id="nationality-list">
  <option value="Afghan"></option>
  <option value="Albanian"></option>
  <option value="Algerian"></option>
</datalist>

{#if form?.error}
  <p>{form.error}</p>
{/if}
