<script>
	import { writable } from 'svelte/store';

	// Stores für die Formulardaten und den Formularstatus
	export const formData = writable({
		name: '',
		email: '',
		message: ''
	});

	export const formState = writable({
		sending: false,
		message: '',
		error: false
	});

	// Funktion, um das Formular zu verarbeiten
	async function handleSubmit(event) {
		event.preventDefault();

		// Setze den Status auf 'sending'
		formState.update(state => ({ 
			...state, 
			sending: true, 
			message: '',
			error: false 
		}));

		try {
			// Erstelle FormData für korrekte Serververarbeitung
			const formDataToSend = new FormData();
			formDataToSend.append('name', $formData.name);
			formDataToSend.append('email', $formData.email);
			formDataToSend.append('message', $formData.message);

			// Sende die Formulardaten an den Server
			const response = await fetch('/contact', {
				method: 'POST',
				body: formDataToSend
			});

			if (!response.ok) {
				throw new Error('Fehler beim Senden der Nachricht');
			}

			const result = await response.json();

			// Erfolgreiche Antwort
			formState.update(state => ({ 
				...state, 
				sending: false, 
				message: result.message || 'Nachricht erfolgreich gesendet!',
				error: false 
			}));

			// Optional: Formular zurücksetzen
			formData.set({
				name: '',
				email: '',
				message: ''
			});

		} catch (error) {
			// Fehlerbehandlung
			formState.update(state => ({ 
				...state, 
				sending: false, 
				message: error.message || 'Ein Fehler ist aufgetreten',
				error: true 
			}));
		}
	}
</script>

<div class="contact-container">
	<h1>Kontaktieren Sie uns</h1>
	
	<form on:submit={handleSubmit}>
		<label>
			Name:
			<input 
				type="text" 
				bind:value={$formData.name} 
				required 
				disabled={$formState.sending}
			/>
		</label>

		<label>
			Email:
			<input 
				type="email" 
				bind:value={$formData.email} 
				required 
				disabled={$formState.sending}
			/>
		</label>

		<label>
			Nachricht:
			<textarea 
				bind:value={$formData.message} 
				required 
				disabled={$formState.sending}
			></textarea>
		</label>

		<button 
			type="submit" 
			disabled={$formState.sending}
		>
			{$formState.sending ? 'Wird gesendet...' : 'Nachricht senden'}
		</button>

		{#if $formState.message}
			<p class:error={$formState.error}>
				{$formState.message}
			</p>
		{/if}
	</form>
</div>

<style>
	.contact-container {
		max-width: 500px;
		margin: 0 auto;
		padding: 2rem;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	label {
		display: flex;
		flex-direction: column;
		font-weight: bold;
	}

	input, textarea {
		margin-top: 0.5rem;
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	button {
		padding: 0.75rem;
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	button:disabled {
		background-color: #cccccc;
		cursor: not-allowed;
	}

	.error {
		color: red;
		text-align: center;
	}
</style>