<script>
  import { createClient } from "@supabase/supabase-js";
  import { onMount } from "svelte";

  // Supabase client initialization
  const supabase = createClient(
    "https://bwzdxxvcoifrajdrfrai.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3emR4eHZjb2lmcmFqZHJmcmFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2OTc5NjgsImV4cCI6MjAyNDI3Mzk2OH0.bsXtaDV4P95MZD7UETjk17ckEXedoZV6O4VKpVqit0E"
  );

  let blogs = []; // Blogs data
  let selectedBlog = null; // Selected blog details
  let loading = true; // Loading state
  let errorMessage = ""; // Error message
  let currentPage = 1; // Current page for pagination
  const blogsPerPage = 3; // Number of blogs to show per page
  let totalBlogs = 0; // Total number of blogs for pagination

  // Fetch blogs for the main page
  const fetchBlogs = async () => {
    loading = true;
    try {
      const { data, error, count } = await supabase
        .from("blogs") // Table name
        .select("*", { count: "exact" }) // Select all columns and total count
        .order("date", { ascending: false }) // Sort by date (latest first)
        .range((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage - 1); // Paginate results

      if (error) {
        errorMessage = "Error fetching blogs: " + error.message;
        console.error(errorMessage);
      } else {
        blogs = data;
        totalBlogs = count; // Set total number of blogs for pagination
      }
    } catch (err) {
      console.error("Unknown error:", err);
      errorMessage = "Unknown error fetching blogs.";
    } finally {
      loading = false;
    }
  };

  // Fetch detailed information for the selected blog
  const fetchBlogDetails = async (id) => {
    loading = true;
    try {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")  // Select all columns
        .eq("id", id)
        .single();

      if (error) {
        errorMessage = "Error fetching blog details: " + error.message;
        console.error(errorMessage);
      } else {
        selectedBlog = data;
      }
    } catch (err) {
      console.error("Unknown error:", err);
      errorMessage = "Unknown error fetching blog details.";
    } finally {
      loading = false;
    }
  };

  // Fetch data when the component mounts
  onMount(() => {
    fetchBlogs();
  });

  // Handle blog card click
  const handleCardClick = (id) => {
    fetchBlogDetails(id);
  };

  // Back to blog list
  const backToList = () => {
    selectedBlog = null;
  };

  // Handle pagination (next and previous)
  const loadNextPage = () => {
    if ((currentPage - 1) * blogsPerPage < totalBlogs) {
      currentPage += 1;
      fetchBlogs();
    }
  };

  const loadPreviousPage = () => {
    if (currentPage > 1) {
      currentPage -= 1;
      fetchBlogs();
    }
  };
</script>

<!-- Blog Section -->
<div class="container mx-auto px-4 py-16">
  <!-- Title and Subtitle -->
  <div class="text-center mb-12">
    <h1 class="text-4xl font-extrabold text-gray-900">Explore Our Blogs</h1>
    <p class="text-xl text-gray-600">Discover the latest insights and articles to help you grow and learn.</p>
  </div>

  {#if loading}
    <div class="text-center">Loading...</div>
  {:else if errorMessage}
    <div class="text-red-600 text-center">{errorMessage}</div>
  {:else if selectedBlog}
    <!-- Selected Blog Details -->
    <div class="max-w-5xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105">
      <!-- Back Button -->
      <button
        on:click={backToList}
        class="mb-8 text-lg font-semibold text-red-600 hover:text-blue-800 focus:outline-none transition-all duration-300"
      >
        ← Back to Blogs
      </button>
    
      <!-- Blog Image with Gradient Overlay -->
      <div class="relative h-96 overflow-hidden rounded-t-xl">
        <img
          src={selectedBlog.image}
          alt={selectedBlog.title}
          class="w-full h-full object-cover object-center"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>
    
      <!-- Blog Content -->
      <div class="px-10 py-8 space-y-6">
        <!-- Blog Title -->
        <h1 class="text-3xl font-bold text-gray-900 tracking-tight">
          {selectedBlog.title}
        </h1>

        <!-- Author Name -->
        <p class="text-sm text-gray-600">By {selectedBlog.author}</p> <!-- 'author' field in the blog -->

        <!-- Blog Date -->
        <time class="text-sm text-gray-600 block mt-2">{selectedBlog.date}</time>

        <!-- Blog Content -->
        <div class="text-gray-800 space-y-4 text-lg leading-relaxed">
          <p>{selectedBlog.article}</p>
        </div>
      </div>
    </div>
    
  {:else if blogs.length === 0}
    <div class="text-center bg-gray-100 p-10 rounded-lg">No Blogs Found</div>
  {:else}
    <!-- Blog Cards (Vertical Stack) -->
    <div class="flex flex-col gap-8">
      {#each blogs as blog}
        <article
          class="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group"
          on:click={() => handleCardClick(blog.id)}
        >
          <div class="relative overflow-hidden cursor-pointer">
            <img
              src={blog.image}
              alt={blog.title}
              class="w-full h-72 object-cover"  
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
            >
              <p class="text-white font-medium text-sm tracking-wide">
                Learn More
              </p>
            </div>
          </div>
          <div class="p-6">
            <header>
              <h3
                class="text-xl font-semibold text-gray-900 mb-2"
              >
                {blog.title}
              </h3>
              <time class="text-sm text-gray-500 block mb-3">
                {blog.date}
              </time>
            </header>
            <p class="text-gray-600 text-sm leading-relaxed line-clamp-3">
              {blog.short_description}
            </p>
          </div>
        </article>
      {/each}
    </div>

    <!-- Pagination Controls -->
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
          disabled={(currentPage * blogsPerPage) >= totalBlogs}
        >
          Next
        </button>
      </nav>
    </div>
  {/if}
</div>
