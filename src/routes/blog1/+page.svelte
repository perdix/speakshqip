<script>
  import { createClient } from "@supabase/supabase-js";
  import { onMount } from "svelte";

  // Supabase client initialization
  const supabase = createClient(
    "https://bwzdxxvcoifrajdrfrai.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3emR4eHZjb2lmcmFqZHJmcmFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2OTc5NjgsImV4cCI6MjAyNDI3Mzk2OH0.bsXtaDV4P95MZD7UETjk17ckEXedoZV6O4VKpVqit0E"
  );

  let blogs = []; // Blogs data
  let loading = true; // Loading state
  let errorMessage = ""; // Error message
  let currentPage = 1; // Current page for pagination
  const blogsPerPage = 3; // Number of blogs to show per page

  // Fetch blogs from the Supabase database
  const fetchBlogs = async () => {
    loading = true;
    try {
      const { data, error } = await supabase
        .from("blogs") // Table name
        .select("*") // Select all columns
        .order("date", { ascending: false }) // Sort by date (latest first)
        .range((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage - 1); // Pagination logic

      if (error) {
        errorMessage = "Error fetching blogs: " + error.message;
        console.error(errorMessage);
      } else {
        blogs = data;
      }
    } catch (err) {
      console.error("Unknown error:", err);
      errorMessage = "Unknown error fetching blogs.";
    } finally {
      loading = false;
    }
  };

  // Fetch data when the component mounts
  onMount(() => {
    fetchBlogs();
  });

  // Load next page of blogs
  const loadNextPage = () => {
    currentPage += 1;
    fetchBlogs();
  };

  // Load previous page of blogs
  const loadPreviousPage = () => {
    if (currentPage > 1) {
      currentPage -= 1;
      fetchBlogs();
    }
  };
</script>

<!-- Blogs Section -->
<div class="container mx-auto px-4 py-16">
  <h2 class="text-4xl font-extrabold text-center text-gray-900 mb-12 tracking-tight">
    Our Latest Blogs
    <span class="block text-base text-gray-600 mt-2 font-normal">Inspirational Insights and Expert Knowledge</span>
  </h2>

  {#if loading}
    <div class="flex justify-center items-center h-64">
      <div class="animate-pulse flex space-x-4">
        <div class="rounded-full bg-gray-300 h-12 w-12"></div>
        <div class="flex-1 space-y-4 py-1">
          <div class="h-4 bg-gray-300 rounded w-3/4"></div>
          <div class="space-y-3">
            <div class="h-4 bg-gray-300 rounded"></div>
            <div class="h-4 bg-gray-300 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  {:else if errorMessage}
    <div class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative text-center" role="alert">
      <strong class="font-bold">Error: </strong>
      <span class="block sm:inline">{errorMessage}</span>
    </div>
  {:else if blogs.length === 0}
    <div class="text-center bg-gray-100 p-10 rounded-lg">
      <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
      </svg>
      <p class="mt-4 text-xl text-gray-600">No Blogs Found</p>
    </div>
  {:else}
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each blogs as blog}
        <article class="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">
          <div class="relative overflow-hidden">
            <img 
              src={blog.image} 
              alt={blog.title} 
              class="w-full h-56 object-cover transition-transform duration-500 group-hover:text-red-600"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p class="text-white font-medium text-sm tracking-wide">Learn More</p>
            </div>
          </div>
          <div class="p-6">
            <header>
              <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                {blog.title}
              </h3>
              <time class="text-sm text-gray-500 block mb-3">{blog.date}</time>
            </header>
            <p class="text-gray-600 text-sm leading-relaxed line-clamp-3">
              {blog.short_description}
            </p>
            <div class="mt-4 flex items-center justify-between">
              <a href="#" class="text-red-800 font-semibold text-sm hover:text-blue-800 transition-colors">
                More Details
              </a>
              <div class="flex items-center space-x-2">
                <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </div>
          </div>
        </article>
      {/each}
    </div>
    
    <!-- Pagination controls -->
    <div class="mt-12 flex justify-center">
      <nav aria-label="Pagination" class="inline-flex rounded-md shadow-sm -space-x-px">
        <button 
          on:click={loadPreviousPage} 
          class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button 
          on:click={loadNextPage} 
          class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          Next
        </button>
      </nav>
    </div>
  {/if}
</div>
