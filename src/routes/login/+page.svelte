<!-- page.svelte -->
<script>
  let email = '';
  let password = '';

  async function handleLogin(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:5173/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    if (response.ok) {
      window.location.href = '/dashboard';
    } else {
      console.error('Login failed');
    }
  }
</script>

<form on:submit={handleLogin}>
  <input type="email" bind:value={email} placeholder="Email" required />
  <input type="password" bind:value={password} placeholder="Password" required />
  <button type="submit">Login</button>
</form>
