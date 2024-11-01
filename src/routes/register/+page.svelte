<script>
  import { enhance } from "$app/forms";
  import { goto } from '$app/navigation';
  import ModalError from "../../lib/components/ModalError.svelte";
  
  export let data;
  export let form = {};
  
  let email = "";
  let password = "";
  let repeatPassword = "";
  let errorMessage = "";
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let emailError = false;
  let passwordError = false;
  let repeatPasswordError = false;
  let showModal = false;

  function openModal(message) {
    errorMessage = message;
    showModal = true;
  }

  function closeModal() {
    console.log("Modal is closed")
    showModal = false;
    errorMessage = "";
    emailError = false;
    passwordError = false;
    repeatPasswordError = false;
  }

  function validateFields() {
    emailError = !emailRegex.test(email);
    passwordError = password.length < 8;
    repeatPasswordError = password !== repeatPassword;
  }

  function handleSubmit(event) {
    validateFields();

    if (emailError) {
      event.preventDefault();
      openModal("Please enter a valid email address.");
    } else if (passwordError) {
      event.preventDefault();
      openModal("Password must be at least 8 characters long.");
    } else if (repeatPasswordError) {
      event.preventDefault();
      openModal("Passwords do not match.");
    }
  }
</script>

<div class="flex justify-center items-center flex-col h-64">
  <h1 class="text-5xl font-bold mt-28 mx-28 sm:text-6xl">Register page</h1>
  <h3 class="text-5xl font-bold mt-14 text-center">Sign Up</h3>
</div>

<div class="login-container flex justify-center items-center flex-col">
  <form
    action="?/register"
    method="POST"
    class="flex justify-center items-center flex-col mt-16 mx-16"
    on:submit={handleSubmit}
  >
    <input
      bind:value={email}
      class="bg-zinc-200 h-12 w-72 p-3 rounded-md transition-all focus:outline-none focus:ring-1 focus:ring-zinc-600 
        {emailError ? 'border-red-500 ring-red-500' : 'border-green-500 ring-green-500'}"
      type="text"
      name="email"
      id="email"
      placeholder="Email"
      on:blur={() => emailError = !emailRegex.test(email)}
    />
    <input
      bind:value={password}
      class="bg-zinc-200 h-12 w-72 p-3 rounded-md mt-8 transition-all focus:outline-none focus:ring-1 focus:ring-zinc-600
        {passwordError ? 'border-red-500 ring-red-500' : 'border-green-500 ring-green-500'}"
      type="password"
      name="password"
      id="password"
      placeholder="Password"
      on:blur={() => passwordError = password.length < 8}
    />
    <input
      bind:value={repeatPassword}
      class="bg-zinc-200 h-12 w-72 p-3 rounded-md mt-8 transition-all focus:outline-none focus:ring-1 focus:ring-zinc-600
        {repeatPasswordError ? 'border-red-500 ring-red-500' : 'border-green-500 ring-green-500'}"
      type="password"
      name="repeatPassword"
      id="repeatPassword"
      placeholder="Repeat Password"
      on:blur={() => repeatPasswordError = password !== repeatPassword}
    />

    <a href="#" class="mt-8 hover:opacity-85">Why do we need this information?</a>
    <button
      class="transition-all bg-zinc-800 h-10 p-2 flex justify-center items-center w-auto rounded-lg mt-8 drop-shadow-md text-white hover:opacity-75"
      type="submit"
      name="submit"
      id="submit"
    >
      Sign Up
    </button>
  </form>
  <a
    href="/login"
    class="transition-all bg-zinc- 800 h-10 p-2 flex justify-center items-center text-center w-auto rounded-lg mt-3 mb-11 drop-shadow-md text-white hover:opacity-75"
  >
    Already have an account?
  </a>
</div>

{#if showModal}
<ModalError errorMessage={errorMessage} />
{/if}