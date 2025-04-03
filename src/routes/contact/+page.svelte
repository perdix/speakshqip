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

<div class="min-h-screen flex items-center justify-center bg-gray-50 p-4">
	<div class="w-full max-w-4xl grid md:grid-cols-2 shadow-2xl rounded-3xl overflow-hidden">
		<!-- Creative Image Section -->
		<div class="relative hidden md:block">
			<img 
				src="\graphics\contact_page.jpg" 
				alt="Contact Background" 
				class="absolute inset-0 w-full h-full object-cover filter grayscale-[20%]"
			/>
			<div class="absolute inset-0 bg-gradient-to-br from-red-500/20 to-rose-700/10"></div>
			<div class="relative z-10 text-white p-9 flex flex-col justify-center h-full">
				<h2 class="text-4xl font-bold mb-4 tracking-tight">Contact us</h2>
				<p class="text-xl opacity-80">We're here to help. 
					Send us a message and we'll respond promptly.</p>
			</div>
		</div>

		<!-- Form Section -->
		<div class="bg-white p-8 md:p-12 flex flex-col justify-center">
			<form on:submit|preventDefault={handleSubmit} class="space-y-6">
				<div>
					<label class="block text-sm font-medium text-gray-700 mb-2">
						Name
						<input 
							type="text" 
							bind:value={name} 
							required 
							placeholder="Your full name" 
							class="mt-1 block w-full border-b-2 border-gray-300 
							focus:border-red-500 transition-colors duration-300 outline-none pb-2"
						/>
					</label>
				</div>

				<div>
					<label class="block text-sm font-medium text-gray-700 mb-2">
						Email
						<input 
							type="email" 
							bind:value={email} 
							required 
							placeholder="you@example.com" 
							class="mt-1 block w-full border-b-2 border-gray-300 
							focus:border-red-500 transition-colors duration-300 outline-none pb-2"
						/>
					</label>
				</div>

				<div>
					<label class="block text-sm font-medium text-gray-700 mb-2">
						Message
						<textarea 
							bind:value={message} 
							required 
							placeholder="Write your message here" 
							rows="4" 
							class="mt-1 block w-full border-b-2 border-gray-300 
							focus:border-red-500 transition-colors duration-300 outline-none resize-none pb-2"
						></textarea>
					</label>
				</div>

				<button 
					type="submit" 
					disabled={loading}
					class="w-full bg-red-500 text-white py-3 rounded-full hover:bg-red-600 transition-colors duration-300 flex items-center justify-center space-x-2"
				>
					{#if loading}
						<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
						 fill="none" viewBox="0 0 24 24">
							<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" 
							stroke-width="4"></circle>
							<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 
							0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042
							 1.135 5.824 3 7.938l3-2.647z"></path>
						</svg>
					{/if}
					<span>{loading ? "Sending..." : "Send Message"}</span>
				</button>
			</form>

			{#if successMessage}
				<div class="mt-4 text-center">
					<p class="text-green-600 bg-green-50 p-3 rounded-lg">{successMessage}</p>
				</div>
			{/if}

			{#if errorMessage}
				<div class="mt-4 text-center">
					<p class="text-red-600 bg-red-50 p-3 rounded-lg">{errorMessage}</p>
				</div>
			{/if}
		</div>
	</div>
</div>

