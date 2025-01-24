<script>
  import { createClient } from "@supabase/supabase-js";
  
  const supabase = createClient(
    "https://bwzdxxvcoifrajdrfrai.supabase.co", 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3emR4eHZjb2lmcmFqZHJmcmFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2OTc5NjgsImV4cCI6MjAyNDI3Mzk2OH0.bsXtaDV4P95MZD7UETjk17ckEXedoZV6O4VKpVqit0E"
  );
  
  let name = "";
  let lastName = "";
  let email = "";
  let message = "";
  
  let errors = {
    name: "",
    lastName: "",
    email: "",
    message: ""
  };
  
  function validateField(field, value) {
    switch(field) {
      case 'name':
        errors.name = value.length < 2 ? "First name must be at least 2 characters" : "";
        break;
      case 'lastName':
        errors.lastName = value.length < 2 ? "Last name must be at least 2 characters" : "";
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        errors.email = !emailRegex.test(value) ? "Invalid email address" : "";
        break;
      case 'message':
        errors.message = value.length < 10 ? "Message must be at least 10 characters" : "";
        break;
    }
  }
  
  function validateForm() {
    validateField('name', name);
    validateField('lastName', lastName);
    validateField('email', email);
    validateField('message', message);
    
    return !Object.values(errors).some(error => error !== "");
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (validateForm()) {
      try {
        const { error } = await supabase.from("contact").insert({
          name,
          lastName,
          email,
          message
        });
  
        if (error) throw error;
  
        name = "";
        lastName = "";
        email = "";
        message = "";
        errors = { name: "", lastName: "", email: "", message: "" };
      } catch (err) {
        console.error("Error saving:", err);
      }
    }
  };
  </script>
  
  <div class="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
    <div class="max-w-md w-full bg-white shadow-2xl rounded-xl overflow-hidden">
      <div class="px-6 py-8">
        <h2 class="text-3xl font-extrabold text-center text-gray-900 mb-8">
          Contact Form
        </h2>
        <form on:submit={handleSubmit} class="space-y-6">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <input 
                id="name" 
                type="text" 
                bind:value={name} 
                on:blur={() => validateField('name', name)}
                class="w-full px-3 py-2 border {errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 {errors.name ? 'focus:ring-red-500' : 'focus:ring-indigo-500'}" 
                placeholder="Your first name" 
              />
              {#if errors.name}
                <p class="text-red-500 text-xs mt-1">{errors.name}</p>
              {/if}
            </div>
            <div>
              <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
                Last Name
              </label>
              <input 
                id="lastName" 
                type="text" 
                bind:value={lastName} 
                on:blur={() => validateField('lastName', lastName)}
                class="w-full px-3 py-2 border {errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 {errors.lastName ? 'focus:ring-red-500' : 'focus:ring-indigo-500'}" 
                placeholder="Your last name" 
              />
              {#if errors.lastName}
                <p class="text-red-500 text-xs mt-1">{errors.lastName}</p>
              {/if}
            </div>
          </div>
          
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input 
              id="email" 
              type="email" 
              bind:value={email} 
              on:blur={() => validateField('email', email)}
              class="w-full px-3 py-2 border {errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 {errors.email ? 'focus:ring-red-500' : 'focus:ring-indigo-500'}" 
              placeholder="Your email" 
            />
            {#if errors.email}
              <p class="text-red-500 text-xs mt-1">{errors.email}</p>
            {/if}
          </div>
          
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea 
              id="message" 
              bind:value={message} 
              on:blur={() => validateField('message', message)}
              rows="4" 
              class="w-full px-3 py-2 border {errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 {errors.message ? 'focus:ring-red-500' : 'focus:ring-indigo-500'}" 
              placeholder="Your message"
            ></textarea>
            {#if errors.message}
              <p class="text-red-500 text-xs mt-1">{errors.message}</p>
            {/if}
          </div>
          
          <div>
            <button 
              type="submit" 
              class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>