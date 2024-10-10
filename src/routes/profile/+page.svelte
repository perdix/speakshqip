<script>
  import { enhance } from "$app/forms";
  export let data;
  export let form;
  let submitForm;
  let edit = false;

  function toggleEdit(e) {
    edit = !edit;
    console.log(edit);
<<<<<<< HEAD
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
=======
    if (!edit) {
      submitForm.submit();
    }
  }
</script>

<form
  class="flex flex-col m-3"
  bind:this={submitForm}
  action={"?/editUser"}
  use:enhance
  method="POST"
  enctype="multipart/form-data"
>
  <label class="mb-4 flex items-center">
    Username
    <input
      class={!edit
        ? "bg-zinc-100 p-3 rounded-md ml-auto w-64 transition-all"
        : "bg-zinc-200 p-3 rounded-md ml-auto w-64 transition-all"}
      type="text"
      disabled={!edit}
      value={data.userDetails[0].username}
      name="username"
    />
  </label>

  <label class="mb-4 flex items-center">
    Bio
    <input
      class={!edit
        ? "bg-zinc-100 p-3 rounded-md ml-auto w-64 transition-all"
        : "bg-zinc-200 p-3 rounded-md ml-auto w-64 transition-all"}
      type="text"
      value={data.userDetails[0].bio}
      disabled={!edit}
      name="bio"
    />
  </label>

  <label class="mb-4 flex items-center">
    User XP
    <input
      class="bg-zinc-100 p-3 rounded-md ml-auto w-64 transition-all"
      type="text"
      bind:value={data.userDetails[0].xp}
      disabled
    />
  </label>

  <label class="mb-4 flex items-center">
    Level
    <input
      class="bg-zinc-100 p-3 rounded-md ml-auto w-64 transition-all"
      type="text"
      value={data.userDetails[0].level}
      disabled
    />
  </label>

  <label class="mb-4 flex items-center">
    Age
    <input
      class={!edit
        ? "bg-zinc-100 p-3 rounded-md ml-auto w-64 transition-all"
        : "bg-zinc-200 p-3 rounded-md ml-auto w-64 transition-all"}
      type="text"
      value={data.userDetails[0].age}
      disabled={!edit}
      name="age"
    />
  </label>

  <label class="mb-4 flex items-center">
    Nationality
    <input
      class={!edit
        ? "bg-zinc-100 p-3 rounded-md ml-auto w-64 transition-all"
        : "bg-zinc-200 p-3 rounded-md ml-auto w-64 transition-all"}
      type="text"
      value={data.userDetails[0].nationality}
      disabled={!edit}
      list="nationality-list"
      name="nationality"
    />
  </label>

  <label class="mb-4 flex items-center justify-between">
    Image

    <div class="flex items-center">
      {#if data.userDetails[0].public_image_url}
        <img
          src={data.userDetails[0].public_image_url}
          alt="user profile"
          class="w-10 h-10 rounded-full object-cover"
        />
      {/if}
>>>>>>> 11870c6fa02f964347d06560227d743685a705e5
      <input
        type="file"
        class={!edit
<<<<<<< HEAD
          ? "bg-zinc-100 p-3 rounded-md w-64 transition-all"
          : "bg-zinc-200 p-3 rounded-md w-64 transition-all"}
        type="text"
        bind:value={data.userDetails[0].username}
=======
          ? "bg-zinc-100 p-3 rounded-md ml-auto w-64 transition-all"
          : "bg-zinc-200 p-3 rounded-md ml-auto w-64 transition-all"}
>>>>>>> 11870c6fa02f964347d06560227d743685a705e5
        disabled={!edit}
        name="image"
      />
    </div>
<<<<<<< HEAD

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
=======
  </label>

  <input type="hidden" name="user_id" value={data.session.user.id} />

  <button
    class="p-2 w-64 bg-red-500 text-white rounded-md m-3"
    type={edit ? "submit" : "button"}
    on:click={(e) => toggleEdit(e)}
  >
    {edit ? "Save" : "Edit"}
  </button>
</form>
>>>>>>> 11870c6fa02f964347d06560227d743685a705e5

<datalist id="nationality-list">
  <option value="Afghan"></option>
  <option value="Albanian"></option>
  <option value="Algerian"></option>
</datalist>

{#if form?.error}
  <p>{form.error}</p>
{/if}
