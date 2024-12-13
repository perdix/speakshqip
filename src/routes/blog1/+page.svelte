<script>
    import { createClient } from "@supabase/supabase-js";
    import { onMount } from "svelte";  // Import onMount function for lifecycle management
  
    // Initialize Supabase client
    const supabase = createClient(
      "https://bwzdxxvcoifrajdrfrai.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3emR4eHZjb2lmcmFqZHJmcmFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2OTc5NjgsImV4cCI6MjAyNDI3Mzk2OH0.bsXtaDV4P95MZD7UETjk17ckEXedoZV6O4VKpVqit0E"
    );
  
    let tips = [];
  
    // Fetch data from the '10tips' table
    const fetchTips = async () => {
      const { data, error } = await supabase
        .from("10tips")  // Table name
        .select("*");    // Select all columns
  
      if (error) {
        console.error("Error fetching tips:", error);
      } else {
        tips = data;
      }
    };
  
    // Fetch data on component mount
    onMount(() => {
      fetchTips();
    });
  
    let errors = [
      { title: "Incorrect Verb Conjugation", description: "A common mistake is incorrect verb conjugation." },
      { title: "Incorrect Use of Articles", description: "In Albanian, there are no indefinite articles." },
      { title: "Formal vs. Informal Address", description: "Using 'ti' instead of 'ju' in formal conversations." }
    ];
  </script>
  
  <div class="hero bg-cover bg-center text-white text-center py-16 px-6 flex flex-col items-center justify-center" style="background-image: url('/graphics/student2.jpg');">
    <div class="hero-content max-w-2xl">
      <h1 class="text-4xl font-extrabold mb-4 leading-tight">Discover the Rich History of the Albanian Language</h1>
      <p class="text-xl mb-6 opacity-90">SpeakShqip brings you fascinating insights and valuable resources to explore the origins, evolution, and significance of the Albanian language and culture.</p>
      <button class="bg-white text-black py-3 px-6 rounded-xl font-semibold text-lg cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 ease-in-out">
        Explore Our Articles
      </button>
      <div class="stats flex justify-center gap-8 mt-8">
        <div class="stat-item text-center">
          <div class="text-3xl font-bold">3,000+</div>
          <div>Years of Albanian History</div>
        </div>
        <div class="stat-item text-center">
          <div class="text-3xl font-bold">7</div>
          <div>Albanian Dialects</div>
        </div>
        <div class="stat-item text-center">
          <div class="text-3xl font-bold">2 Million+</div>
          <div>Native Albanian Speakers Worldwide</div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="container mx-auto px-6 py-8">
    <!-- First row: Text on the left, SVG on the right -->
    <div class="row bg-white rounded-2xl p-8 mb-12 flex items-center gap-8">
      <div class="text flex-1">
        <h3 class="text-red-600 text-2xl font-bold mb-3">Fun Fact #1: Albanian belongs to its own language family</h3>
        <p class="text-gray-700 leading-relaxed">Albanian is a unique Indo-European language, forming its own language family with no direct relatives. This makes it one of the most fascinating and isolated languages in Europe.</p>
      </div>
      <div class="svg-container flex-1 justify-center items-center">
        <img src="/graphics/svg1.svg" alt="Albanian Language Family" class="max-w-[300px] w-full h-auto"/>
      </div>
    </div>
  
    <!-- Second row: SVG on the left, Text on the right -->
    <div class="row bg-white rounded-2xl p-8 mb-12 flex items-center gap-8">
      <div class="svg-container flex-1 justify-center items-center">
        <img src="/graphics/svg2.svg" alt="Albanian Dialects" class="max-w-[300px] w-full h-auto"/>
      </div>
      <div class="text flex-1">
        <h3 class="text-red-600 text-2xl font-bold mb-3">Fun Fact #2: Albanian has many dialects</h3>
        <p class="text-gray-700 leading-relaxed">There are two main dialects of Albanian: Gheg and Tosk, which differ significantly in pronunciation and grammar. Tosk is the dialect used for standard Albanian, but Gheg is still spoken in many northern regions of Albania.</p>
      </div>
    </div>
  
    <!-- Third row: Text on the left, SVG on the right -->
    <div class="row bg-white rounded-2xl p-8 mb-12 flex items-center gap-8">
      <div class="text flex-1">
        <h3 class="text-red-600 text-2xl font-bold mb-3">Fun Fact #3: Albanian was the last European language to adopt the Latin alphabet</h3>
        <p class="text-gray-700 leading-relaxed">Throughout its history, Albanian used various writing systems, including Greek and Arabic alphabets. It was only in 1908 that the Latin alphabet was officially adopted for Albanian.</p>
      </div>
      <div class="svg-container flex-1 justify-center items-center">
        <img src="/graphics/svg3.svg" alt="Albanian Alphabet" class="max-w-[300px] w-full h-auto"/>
      </div>
    </div>
  </div>
  
  <div class="mistakes-section bg-gray-100 py-16">
    <div class="container mx-auto text-center">
      <!-- Banner Image -->
      <img src="/graphics/mistakes-banner.jpg" alt="Common Mistakes in Albanian" class="w-full max-w-3xl mx-auto mb-12 rounded-lg shadow-lg" />
      
      <!-- Heading -->
      <h2 class="text-4xl font-bold text-red-600 mb-8">Common Mistakes in Albanian</h2>
      
      <!-- Description Text -->
      <p class="text-xl text-gray-700 mb-12">Learn about the most common grammatical errors to avoid when speaking Albanian.</p>
      
      <!-- Error Cards -->
      <div class="cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each errors as error}
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 class="text-2xl font-semibold text-black">{error.title}</h3>
            <p class="text-gray-600 mt-2">{error.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
  
  <div class="container mx-auto px-6 py-12">
    <!-- Section Heading -->
    <h2 class="text-4xl font-bold text-center text-red-600 mb-12">Sprachtipps</h2>
  
    <!-- Tip Cards -->
    <div class="cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each tips as tip}
        <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
          <h3 class="text-2xl font-semibold text-gray-800 mb-4">{tip.title}</h3>
          <p class="text-gray-700 text-lg leading-relaxed">{tip.description}</p>
        </div>
      {/each}
    </div>
  </div>
  
  
  <style>
    /* Optional styles to customize the cards */
    .bg-white {
      background-color: #ffffff;
    }
    .text-gray-600 {
      color: #4a4a4a;
    }
    .hover\:shadow-xl:hover {
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    }
  </style>
  