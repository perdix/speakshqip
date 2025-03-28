<script>
	let name = "";
	let email = "";
	let message = "";
	let loading = false;
	let successMessage = "";
	let errorMessage = "";
  
	const handleSubmit = async () => {
	  loading = true;
	  successMessage = "";
	  errorMessage = "";
  
	  try {
		const response = await fetch('/contact/send', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({ name, email, message }),
		});
  
		if (response.ok) {
		  successMessage = "Email sent successfully!";
		  name = email = message = "";
		} else {
		  errorMessage = "Failed to send email.";
		}
	  } catch (err) {
		errorMessage = "Error sending email.";
	  } finally {
		loading = false;
	  }
	};
  </script>
  
  <h1>Contact Us</h1>
  <form on:submit|preventDefault={handleSubmit}>
	<label>
	  Name:
	  <input type="text" bind:value={name} required />
	</label>
  
	<label>
	  Email:
	  <input type="email" bind:value={email} required />
	</label>
  
	<label>
	  Message:
	  <textarea bind:value={message} required></textarea>
	</label>
  
	<button type="submit" disabled={loading}>{loading ? "Sending..." : "Send"}</button>
  </form>
  
  {#if successMessage}
	<p class="success">{successMessage}</p>
  {/if}
  
  {#if errorMessage}
	<p class="error">{errorMessage}</p>
  {/if}
  
  <style>
	label { display: block; margin-bottom: 0.5rem; }
	input, textarea { width: 100%; padding: 0.5rem; margin-bottom: 1rem; }
	button { padding: 0.5rem 1rem; }
	.success { color: green; }
	.error { color: red; }
  </style>
  