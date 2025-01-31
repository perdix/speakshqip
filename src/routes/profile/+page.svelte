<script>
  import { enhance } from "$app/forms";
  import { invalidateAll } from "$app/navigation";
  export let data;
  export let form;
  

  let submitForm;
  let edit = false;
  let showAvatarPopup = false;
  let selectedAvatar = "";
  let uploadImage = "";

  function openAvatarPopup() {
    showAvatarPopup = true;
  }

  function closeAvatarPopup() {
    showAvatarPopup = false;
  }

  async function selectAvatar(avatar) {
    console.log(avatar);
    selectedAvatar = avatar.publicUrl;
    data.userDetails.public_image_url = avatar.publicUrl;


    closeAvatarPopup();
}




  function selectImage(e) {
    const [file] = e.target.files;
    if (file) {
      uploadImage = file;
      console.log(uploadImage);
      data.userDetails.public_image_url = URL.createObjectURL(file);
    }
    closeAvatarPopup();

  }
</script>

<div class=" w-full flex justify-center items-center">
  <form
    class="flex justify-center flex-col m-12"
    bind:this={submitForm}
    action={"?/editUser"}
    use:enhance={({ formElement, formData, action, cancel, submitter }) => {
      if (selectedAvatar) {
        formData.append("avatarUrl", selectedAvatar); // Add the public URL of the avatar
      }

      if (uploadImage) {
      formData.append("image", uploadImage);
      }
      if (formData.get("reset")) {
        console.log("reset");
        cancel();
        edit = false;
        invalidateAll();
      }
      return async ({ result, update }) => {
        edit = false;
        update();
      };
    }}
    method="POST"
    enctype="multipart/form-data"
  >
    <div class="">
        <label
          class="relative transition-all h-24 w-24 rounded-full ml-auto mr-auto m-5 flex justify-center items-center {edit
          ? 'cursor-pointer bg-gray-200 hover:bg-gray-300'
          : 'bg-gray-100'}"
           on:click={edit ? openAvatarPopup : null}
      >
        {#if data.userDetails.public_image_url}
          <img
            src={data.userDetails.public_image_url}
            alt="user profile"
            class="w-24 h-24 rounded-full object-cover"
          />
        {:else}
          <img src="pfp.webp" alt="" />
        {/if}
        {#if edit}
          <div
            class="bg-cd-black absolute h-6 w-6 rounded-full bottom-0 right-0 flex justify-center items-center"
          >
            <svg
              class="h-3 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
              />
            </svg>
          </div>
        {/if}
      </label>
    </div>
    <label class="mb-4 flex items-center text-sm gap-4">
      Username
      <input
        class={!edit
          ? "bg-zinc-100 p-3 rounded-md ml-auto w-64 transition-all"
          : "bg-zinc-200 p-3 rounded-md ml-auto w-64 transition-all"}
        type="text"
        disabled={!edit}
        bind:value={data.userDetails.username}
        name="username"
      />
    </label>

    <label class="mb-4 flex items-center text-sm">
      Bio
      <input
        class={!edit
          ? "bg-zinc-100 p-3 rounded-md ml-auto w-64 transition-all"
          : "bg-zinc-200 p-3 rounded-md ml-auto w-64 transition-all"}
        type="text"
        bind:value={data.userDetails.bio}
        disabled={!edit}
        name="bio"
      />
    </label>

    <label class="mb-4 flex items-center text-sm">
      User XP
      <input
        class="bg-zinc-100 p-3 rounded-md ml-auto w-64 transition-all"
        type="text"
        bind:value={data.userDetails.xp}
        disabled
      />
    </label>

    <label class="mb-4 flex items-center text-sm">
      Level
      <input
        class="bg-zinc-100 p-3 rounded-md ml-auto w-64 transition-all"
        type="text"
        bind:value={data.userDetails.level}
        disabled
      />
    </label>

    <label class="mb-4 flex items-center text-sm">
      Age
      <input
        class={!edit
          ? "bg-zinc-100 p-3 rounded-md ml-auto w-64 transition-all"
          : "bg-zinc-200 p-3 rounded-md ml-auto w-64 transition-all"}
        type="text"
        bind:value={data.userDetails.age}
        disabled={!edit}
        name="age"
      />
    </label>

    <label class="mb-4 flex items-center text-sm">
      Nationality
      <input
        class={!edit
          ? "bg-zinc-100 p-3 rounded-md ml-auto w-64 transition-all"
          : "bg-zinc-200 p-3 rounded-md ml-auto w-64 transition-all"}
        type="text"
        bind:value={data.userDetails.nationality}
        disabled={!edit}
        list="nationality-list"
        name="nationality"
      />
    </label>

    <input type="hidden" name="user_id" value={data.session.user.id} />

    {#if edit}
      <div class="flex gap-2">
        <button
          class="p-2 w-full border border-cd-red rounded-md"
          type="submit"
          name="reset"
          value="reset"
        >
          Cancel
        </button>
        <button
          class="p-2 w-full bg-cd-red text-white rounded-md"
          type="submit"
          name="submit"
          value="submit"
        >
          Save
        </button>
      </div>
    {:else}
      <button
        class="p-2 w-full bg-cd-red text-white rounded-md"
        type="reset"
        on:click={() => (edit = true)}
      >
        Edit
      </button>
    {/if}
    
  </form>
  {#if showAvatarPopup}
          <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div class="bg-white p-6 rounded-md shadow-md">
              <h2 class="text-xl mb-4">Choose an Avatar</h2>
              <div class="flex gap-4">
                {#each data.urls as avatar}
                <img
                  src={avatar.publicUrl}
                  alt="Avatar option"
                  class="w-16 h-16 rounded-full cursor-pointer"
                  on:click={() => selectAvatar(avatar)}
                />
              {/each}
              </div>
              <label class="block mt-4">
                <span class="text-sm">Or upload an image:</span>
                <input   type="file"
                class={!edit
                  ? "bg-zinc-100 p-3 rounded-md ml-auto w-64 transition-all"
                  : "bg-zinc-200 p-3 rounded-md ml-auto w-64 transition-all"}
                disabled={!edit}
                name="image"
                on:change={selectImage}/>
              </label>
              <button
                class="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
                on:click={closeAvatarPopup}
              >
                Close
              </button>
            </div>
          </div>
          {/if}
  <datalist id="nationality-list">
    {#each data.nationalities as nationality}
    <option value="{nationality.country_ennationality}"></option>
  {/each}
  </datalist>

  {#if form?.error}
    <p>{form.error}</p>
  {/if}
</div>