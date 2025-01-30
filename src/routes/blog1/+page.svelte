<script>
  import { createClient } from "@supabase/supabase-js";
  import { onMount } from "svelte";

  // Supabase client initialization
  const supabase = createClient(
    "https://bwzdxxvcoifrajdrfrai.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3emR4eHZjb2lmcmFqZHJmcmFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2OTc5NjgsImV4cCI6MjAyNDI3Mzk2OH0.bsXtaDV4P95MZD7UETjk17ckEXedoZV6O4VKpVqit0E"
  );

  export let data = { userDetails: {} }; // Provide default value

  let blogs = [];
  let selectedBlog = null;
  let loading = true;
  let errorMessage = "";
  let currentPage = 1;
  let totalBlogs = 0;
  const blogsPerPage = 3;
  let showCreateForm = false;

  // New blog form data
  let newBlog = {
    title: "",
    short_description: "",
    article: "",
    image: "",
    author: "",
    date: new Date().toISOString().split('T')[0]
  };

  // Fetch blogs for the main page
  const fetchBlogs = async () => {
    loading = true;
    try {
      const { data, error, count } = await supabase
        .from("blogs")
        .select("*", { count: "exact" })
        .order("date", { ascending: false })
        .range((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage - 1);

      if (error) {
        errorMessage = "Error fetching blogs: " + error.message;
        console.error(errorMessage);
      } else {
        blogs = data;
        totalBlogs = count;
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
        .select("*")
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

  // Reset form
  const resetForm = () => {
    newBlog = {
      title: "",
      short_description: "",
      article: "",
      image: "",
      author: "",
      date: new Date().toISOString().split('T')[0]
    };
    showCreateForm = false;
  };

  // Create new blog
  const createBlog = async () => {
    try {
      loading = true;
      const { data: blogData, error } = await supabase
        .from("blogs")
        .insert([{
          ...newBlog,
          author: newBlog.author
        }])
        .select();

      if (error) throw error;

      blogs = [blogData[0], ...blogs];
      resetForm();
      await fetchBlogs();
    } catch (error) {
      errorMessage = "Error creating blog: " + error.message;
      console.error(errorMessage);
    } finally {
      loading = false;
    }
  };

  onMount(async () => {
    await fetchBlogs();
  });

  const handleCardClick = (id) => {
    fetchBlogDetails(id);
  };

  const backToList = () => {
    selectedBlog = null;
  };

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

<!-- Admin Header - Only shown if user is admin -->
{#if data?.userDetails?.role === "Admin"}
  <div class="bg-blue-600 text-white p-4 text-center">
    <p class="text-lg font-bold">You are Admin</p>
    <button
      on:click={() => showCreateForm = !showCreateForm}
      class="mt-2 bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition-colors"
    >
      {showCreateForm ? 'Cancel' : 'Create New Article'}
    </button>
  </div>

  {#if showCreateForm}
    <div class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h2 class="text-2xl font-bold mb-4">Create New Blog Post</h2>
        
        <form on:submit|preventDefault={createBlog} class="space-y-4">
          <div>
            <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              id="title"
              bind:value={newBlog.title}
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label for="author" class="block text-sm font-medium text-gray-700">Author</label>
            <input
              type="text"
              id="author"
              bind:value={newBlog.author}
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label for="short_description" class="block text-sm font-medium text-gray-700">Short Description</label>
            <textarea
              id="short_description"
              bind:value={newBlog.short_description}
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows="3"
              required
            ></textarea>
          </div>

          <div>
            <label for="article" class="block text-sm font-medium text-gray-700">Article Content</label>
            <textarea
              id="article"
              bind:value={newBlog.article}
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows="6"
              required
            ></textarea>
          </div>

          <div>
            <label for="image" class="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="url"
              id="image"
              bind:value={newBlog.image}
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div class="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              on:click={resetForm}
              class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? 'Creating...' : 'Create Blog'}
            </button>
          </div>
        </form>
      </div>
    </div>
  {/if}
{/if}

<!-- Blog Section -->
<div class="container mx-auto px-4 py-16">
  <div class="text-center mb-10">
    <h1 class="text-4xl font-extrabold text-gray-900">Explore Our Blogs</h1>
    <p class="text-xl text-gray-600">Discover the latest insights and articles to help you grow and learn.</p>
  </div>

  {#if loading}
    <div class="text-center">Loading...</div>
  {:else if errorMessage}
    <div class="text-red-600 text-center">{errorMessage}</div>
  {:else if selectedBlog}
    <!-- Selected Blog Details -->
    <div class="max-w-5xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
      <button
        on:click={backToList}
        class="mb-8 text-lg font-semibold text-red-600 hover:text-blue-800 focus:outline-none transition-all duration-300"
      >
        ← Back to Blogs
      </button>

      <div class="relative h-96 overflow-hidden rounded-t-xl">
        <img
          src={selectedBlog.image}
          alt={selectedBlog.title}
          class="w-full h-full object-cover object-center"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>

      <div class="px-10 py-8 space-y-6">
        <h1 class="text-3xl font-bold text-gray-900 tracking-tight">
          {selectedBlog.title}
        </h1>
        <p class="text-sm text-gray-600">By {selectedBlog.author}</p>
        <time class="text-sm text-gray-600 block mt-2">{selectedBlog.date}</time>
        <div class="text-gray-800 space-y-4 text-lg leading-relaxed">
          <p>{selectedBlog.article}</p>
        </div>
      </div>
    </div>
  {:else if blogs.length === 0}
    <div class="text-center bg-gray-100 p-10 rounded-lg">No Blogs Found</div>
  {:else}
    <!-- Blog Cards -->
    <div class="max-w-3xl mx-auto flex flex-col gap-8">
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
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
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
    </div>
  {/if}
</div>