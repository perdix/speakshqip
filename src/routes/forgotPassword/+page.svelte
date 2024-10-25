<!-- page.svelte -->
<script>
    import { enhance } from "$app/forms";
    import ModalError from "../../lib/components/ModalError.svelte";
    export let data;
    export let form = {};  
    console.log(data);
  </script>
  
  <div class="flex justify-center items-center flex-col h-64">
    <h1 class=" text-5xl font-bold mt-28 mr-28 ml-28 sm:text-6xl">SpeakShqip</h1>
    <h3 class="text-3xl font-bold mt-14 text-center">An Email will be sent to recover your password</h3>
  </div>
  <br>
  <br>
  
  <div class="login-container flex justify-center items-center flex-col">
    <form
      action="?/recover"
      use:enhance
      method="POST"
      class="flex justify-center items-center flex-col mt-16 mr-16 ml-16"
    >
      <input
        class=" bg-zinc-200 h-12 w-72 p-6 rounded-md focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all"
        type="text"
        name="email"
        id="email"
        placeholder="Enter Email to Recieve Message"
      />
      <button
        class="transition-all bg-zinc-800 h-10 mb-16 p-2 flex justify-center items-center w-auto rounded-lg mt-8 drop-shadow-md text-white hover:opacity-75"
        type="submit"
        name="submit"
        id="submit"
        value="Log In">Send Email</button>
    </form>
   
  </div>
  
  {#if form?.error}
    <ModalError errorMessage={form.error}></ModalError>
  {/if}
  