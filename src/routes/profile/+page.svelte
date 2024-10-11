<script>
  import { enhance } from "$app/forms";
  export let data;
  export let form;
  let submitForm;
  let edit = false;

  function toggleEdit(e) {
    edit = !edit;
    console.log(edit);
    if (!edit) {
      submitForm.submit();
    }
  }
</script>

<div class=" w-full flex justify-center items-center">
  <form
    class="flex justify-center flex-col m-3"
    bind:this={submitForm}
    action={"?/editUser"}
    use:enhance
    method="POST"
    enctype="multipart/form-data"
  >
    <div
      class="relative cursor-pointer bg-cd-red h-24 w-24 rounded-full ml-auto mr-auto m-5 flex justify-center items-center"
    >
      <img src="pfp.webp" alt="" />
      <div
        class="bg-cd-black absolute h-6 w-6 rounded-full bottom-0 right-0 flex justify-center items-center"
      >
        <svg
          class=" h-3 fill-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          ><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
            d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
          /></svg
        >
      </div>
    </div>
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
        <input
          type="file"
          class={!edit
            ? "bg-zinc-100 p-3 rounded-md ml-auto w-64 transition-all"
            : "bg-zinc-200 p-3 rounded-md ml-auto w-64 transition-all"}
          disabled={!edit}
          name="image"
        />
      </div>
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

  <datalist id="nationality-list">
    <option value="Afghan"></option>
    <option value="Albanian"></option>
    <option value="Algerian"></option>
  </datalist>

  {#if form?.error}
    <p>{form.error}</p>
  {/if}
</div>
