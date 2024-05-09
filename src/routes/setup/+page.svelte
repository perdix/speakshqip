<!-- page.svelte -->
<script>
  import { enhance } from "$app/forms";
  export let data;
  export let form; 
</script>

<div class="flex justify-center items-center flex-col h-64">
  <h1 class=" text-5xl font-bold mt-28 mr-28 ml-28 sm:text-6xl">Welcome to SpeakShqip</h1>
  <h3 class="text-5xl font-bold mt-14 text-center">Let's set you up!</h3>
</div>

<div class="login-container flex justify-center items-center flex-col">
  <form
    action="?/setup"
    use:enhance
    method="POST"
    class="flex justify-center items-center flex-col mt-16 mr-16 ml-16"
  >
    <input
      class=" bg-zinc-200 h-12 w-72 p-3 rounded-md focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all"
      type="text"
      name="username"
      id="username"
      placeholder="Enter username"
    />
    <input
      class=" bg-zinc-200 h-12 w-72 p-3 rounded-md mt-8 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all"
      type="number"
      name="age"
      id="age"
      placeholder="Enter Age"
    />
    <input
      class=" bg-zinc-200 h-12 w-72 p-3 rounded-md mt-8 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all"
      type="text"
      name="desc"
      id="desc"
      placeholder="Enter Profile Description"
    />
    <input
      class="bg-zinc-200 h-12 w-72 p-3 rounded-md mt-8 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all"
      type="text"
      name="nationality"
      id="nationality"
      placeholder="Enter Nationality"
      list="nationality-list"
    />
    <input type="hidden" name="user_id" value={data.session.user.id} />
    <datalist id="nationality-list">
      <option value="Afghan">
      <option value="Albanian">
      <option value="Algerian">
    </datalist>


    
    
    
    <button
      class="transition-all bg-zinc-800 h-10 p-2 flex justify-center items-center w-auto rounded-lg mt-8 drop-shadow-md text-white hover:opacity-75"
      type="submit"
      name="submit"
      id="submit"
      value="Sign Up">Continue</button
    >
  </form>
  
</div>


{#if form?.error}
  <p>{form.error}</p>
{/if}
