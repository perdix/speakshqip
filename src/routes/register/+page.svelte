<!-- page.svelte -->
<script>
  import { enhance } from "$app/forms";
  import ModalError from "../../lib/components/ModalError.svelte";
  import ModalSuccess from "../../lib/components/ModalSuccess.svelte";
  export let data;
  export let form = { error: null, successMessage: null };

</script>

<div class="flex justify-center items-center flex-col h-64">
  <h1 class=" text-5xl font-bold mt-28 mr-28 ml-28 sm:text-6xl">SpeakShqip</h1>
  <h3 class="text-5xl font-bold mt-14 text-center">Sign Up</h3>
</div>

<div class="login-container flex justify-center items-center flex-col">
  <form
    action="?/register"
    use:enhance
    method="POST"
    class="flex justify-center items-center flex-col mt-16 mr-16 ml-16"
  >
    <input
      class=" bg-zinc-200 h-12 w-72 p-3 rounded-md focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all"
      type="text"
      name="email"
      id="email"
      placeholder="Email"
    />
    <input
      class=" bg-zinc-200 h-12 w-72 p-3 rounded-md mt-8 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all"
      type="password"
      name="password"
      id="password"
      placeholder="Password"
    />
    <input
    class=" bg-zinc-200 h-12 w-72 p-3 rounded-md mt-8 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all"
    type="password"
    name="passwordRepeat"
    id="passwordRepeat"
    placeholder="Repeat Password"
  />

    <a href="#" class=" mt-8 hover:opacity-85"
      >Why do we need this information?</a
    >
    <button
      class="transition-all bg-zinc-800 h-10 p-2 flex justify-center items-center w-auto rounded-lg mt-8 drop-shadow-md text-white hover:opacity-75"
      type="submit"
      name="submit"
      id="submit"
      value="Sign Up">Sign Up</button
    >
  </form>
  <a
    href="/login"
    class=" transition-all bg-zinc-800 h-10 p-2 flex justify-center items-center text-center w-auto rounded-lg mt-3 mb-11 drop-shadow-md text-white hover:opacity-75"
    >Already have an account?</a
  >
</div>

{#if form?.error}
<ModalError errorMessage={form.error} />
{/if}

{#if form?.success?.successMessage}
  <ModalSuccess message={form.success.successMessage} />
{/if}