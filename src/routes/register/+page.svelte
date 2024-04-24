<!-- page.svelte -->
<script>
  import { enhance } from "$app/forms";
  export let data;
  export let form = {};

  // import { enhance } from "$app/forms";

  let email = "";
  let password = "";

  // async function handleLogin(event) {
  //   event.preventDefault();
  //   const response = await fetch('http://localhost:5173/login', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ email, password })
  //   });
  //   if (response.ok) {
  //     window.location.href = '/dashboard';
  //   } else {
  //     console.error('Login failed');
  //   }
  // }
</script>

<form method="POST" action="?/register" use:enhance>
  <input type="email" name="email" placeholder="Email" required />
  <input type="password" name="password" placeholder="Password" required />
  <button type="submit">Register</button>
</form>

{#if form?.error}
  <p>{form.error}</p>
{/if}
