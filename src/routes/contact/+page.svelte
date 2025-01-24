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
        errors.name = value.length < 2 ? "First name too short" : "";
        break;
      case 'lastName':
        errors.lastName = value.length < 2 ? "Last name too short" : "";
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        errors.email = !emailRegex.test(value) ? "Invalid email" : "";
        break;
      case 'message':
        errors.message = value.length < 5 ? "Message too short" : "";
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

<div class="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
  <div class="max-w-screen-xl w-full flex items-center justify-between bg-white shadow-lg rounded-xl overflow-hidden">
 
    <div class="w-1/2 p-8">
      <img src="graphics\contact_page.jpg" alt="Image Description" class="w-full h-auto object-contain opacity-90 hover:opacity-100 transition-opacity">
    </div>

    <div class="w-1/2 bg-white px-12 py-8">
      <h2 class="text-3xl font-light text-center text-rose-800 mb-10">
        Get in touch
      </h2>
      <form on:submit={handleSubmit} class="space-y-6">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <input 
              id="name" 
              type="text" 
              bind:value={name} 
              on:blur={() => validateField('name', name)}
              class="w-full px-3 py-2 border-b border-rose-300 focus:border-rose-600 focus:outline-none" 
              placeholder="First Name" 
            />
            {#if errors.name}
              <p class="text-rose-500 text-xs mt-1">{errors.name}</p>
            {/if}
          </div>
          <div>
            <input 
              id="lastName" 
              type="text" 
              bind:value={lastName} 
              on:blur={() => validateField('lastName', lastName)}
              class="w-full px-3 py-2 border-b border-rose-300 focus:border-rose-600 focus:outline-none" 
              placeholder="Last Name" 
            />
            {#if errors.lastName}
              <p class="text-rose-500 text-xs mt-1">{errors.lastName}</p>
            {/if}
          </div>
        </div>
        
        <div>
          <input 
            id="email" 
            type="email" 
            bind:value={email} 
            on:blur={() => validateField('email', email)}
            class="w-full px-3 py-2 border-b border-rose-300 focus:border-rose-600 focus:outline-none" 
            placeholder="Email" 
          />
          {#if errors.email}
            <p class="text-rose-500 text-xs mt-1">{errors.email}</p>
          {/if}
        </div>
        
        <div>
          <textarea 
            id="message" 
            bind:value={message} 
            on:blur={() => validateField('message', message)}
            rows="4" 
            class="w-full px-3 py-2 border-b border-rose-300 focus:border-rose-600 focus:outline-none resize-none" 
            placeholder="Your Message"
          ></textarea>
          {#if errors.message}
            <p class="text-rose-500 text-xs mt-1">{errors.message}</p>
          {/if}
        </div>
        
        <div>
          <button 
            type="submit" 
            class="w-full py-3 bg-rose-600 text-white hover:bg-rose-700 transition-colors rounded-md"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</div>