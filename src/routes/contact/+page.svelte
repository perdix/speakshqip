<script>
  let name = '';
  let email = '';
  let message = '';
</script>

<main class="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-50 p-5">
  <!-- Left Side: Image -->
  <div class="md:w-1/2 flex justify-center">
    <img
      src="/graphics/contact.png"
      alt="Support Phone"
      class="w-[40%] md:w-[50%] max-w-lg h-auto"
    >
  </div>

  <!-- Right Side: Form -->
  <div class="md:w-1/2 bg-white shadow-lg rounded-lg p-8">
    <h1 class="text-2xl font-bold text-red-600 mb-2">Get in touch</h1>
    <p class="text-gray-600 mb-6">Contact us if you need further assistance.</p>

    <form method="POST" action="/your-endpoint" class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Name and surname</label>
        <input
          id="name"
          type="text"
          bind:value={name}
          placeholder="Name and surname"
          class="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          id="email"
          type="email"
          bind:value={email}
          placeholder="Email"
          class="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
        />
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-gray-700">Please enter the details of your request</label>
        <textarea
          id="message"
          bind:value={message}
          placeholder="Your message"
          rows="4"
          class="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
        ></textarea>
      </div>

      <button
        type="submit"
        class="w-full bg-red-600 text-white font-medium py-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        SUBMIT
      </button>
    </form>
  </div>
</main>

