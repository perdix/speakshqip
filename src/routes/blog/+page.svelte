<!-- src/routes/blog/+page.svelte -->

<script>
	import { goto } from '$app/navigation';
	import { enhance } from '$app/forms';

	export let data;

	let {
		blogs,
		totalBlogs,
		currentPage,
		blogsPerPage,
		errorMessage,
		userDetails
	} = data;

	let selectedBlog = null;
	let showCreateForm = false;
	let loading = false;

	let imagePreview = '';

	let newBlog = {
		title: '',
		short_description: '',
		article: '',
		image: '',
		author: ''
	};

	const handleCardClick = (blog) => {
		selectedBlog = blog;
	};

	const backToList = () => {
		selectedBlog = null;
	};

	const loadNextPage = () => {
		if (currentPage * blogsPerPage < totalBlogs) {
			goto(`?page=${currentPage + 1}`);
		}
	};

	const loadPreviousPage = () => {
		if (currentPage > 1) {
			goto(`?page=${currentPage - 1}`);
		}
	};

	const resetForm = () => {
		newBlog = {
			title: '',
			short_description: '',
			article: '',
			image: '',
			author: ''
		};

		imagePreview = '';
		showCreateForm = false;
	};

	const handleFileUpload = (event) => {
		const file = event.target.files[0];

		if (file) {
			imagePreview = URL.createObjectURL(file);

			// Replace this with real upload logic if needed
			newBlog.image = imagePreview;
		}
	};
</script>

{#if userDetails?.role === 'Admin'}
	<div
		class="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 py-8 px-8 shadow-sm"
	>
		<div class="max-w-7xl mx-auto flex justify-between items-center">
			<div>
				<h2 class="text-2xl font-bold text-gray-800 tracking-tight">
					Admin Dashboard
				</h2>

				<p class="text-gray-600 mt-1">
					Manage and curate your blog content
				</p>
			</div>

			<button
				on:click={() => (showCreateForm = !showCreateForm)}
				class="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-md"
			>
				{showCreateForm ? 'Cancel' : 'Create New Article'}
			</button>
		</div>
	</div>

	{#if showCreateForm}
		<div
			class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50"
		>
			<div
				class="bg-white rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
			>
				<div class="flex justify-between items-center mb-8">
					<h2 class="text-2xl font-bold text-gray-900">
						Create New Blog Post
					</h2>

					<button
						on:click={resetForm}
						class="text-gray-400 hover:text-gray-600"
					>
						✕
					</button>
				</div>

				<form
					method="POST"
					action="?/createBlog"
					use:enhance={() => {
						loading = true;

						return async ({ update }) => {
							await update();
							loading = false;
							resetForm();
							location.reload();
						};
					}}
					class="space-y-6"
				>
					<div class="grid grid-cols-2 gap-6">
						<div class="space-y-2">
							<label class="block text-sm font-medium text-gray-700">
								Title
							</label>

							<input
								name="title"
								bind:value={newBlog.title}
								class="w-full rounded-lg border-gray-200 shadow-sm"
								required
							/>
						</div>

						<div class="space-y-2">
							<label class="block text-sm font-medium text-gray-700">
								Author
							</label>

							<input
								name="author"
								bind:value={newBlog.author}
								class="w-full rounded-lg border-gray-200 shadow-sm"
								required
							/>
						</div>
					</div>

					<div class="space-y-2">
						<label class="block text-sm font-medium text-gray-700">
							Short Description
						</label>

						<textarea
							name="short_description"
							bind:value={newBlog.short_description}
							rows="3"
							class="w-full rounded-lg border-gray-200 shadow-sm"
							required
						/>
					</div>

					<div class="space-y-2">
						<label class="block text-sm font-medium text-gray-700">
							Article Content
						</label>

						<textarea
							name="article"
							bind:value={newBlog.article}
							rows="8"
							class="w-full rounded-lg border-gray-200 shadow-sm"
							required
						/>
					</div>

					<div class="space-y-2">
						<label class="block text-sm font-medium text-gray-700">
							Featured Image
						</label>

						<input
							type="file"
							accept="image/*"
							on:change={handleFileUpload}
							class="w-full rounded-lg border-gray-200 shadow-sm"
						/>

						<input
							type="hidden"
							name="image"
							value={newBlog.image}
						/>

						{#if imagePreview}
							<div class="mt-4 rounded-lg overflow-hidden shadow-lg">
								<img
									src={imagePreview}
									alt="Preview"
									class="w-full h-64 object-cover"
								/>
							</div>
						{/if}
					</div>

					<div class="flex justify-end space-x-4 pt-6">
						<button
							type="button"
							on:click={resetForm}
							class="px-6 py-3 text-sm font-medium text-gray-700"
						>
							Cancel
						</button>

						<button
							type="submit"
							class="px-6 py-3 bg-red-600 text-white rounded-lg text-sm font-medium"
							disabled={loading}
						>
							{loading ? 'Publishing...' : 'Publish Post'}
						</button>
					</div>
				</form>
			</div>
		</div>
	{/if}
{/if}

<div class="container mx-auto px-4 py-16">
	<div class="text-center mb-10">
		<h1 class="text-4xl font-extrabold text-gray-900">
			Explore Our Blogs
		</h1>

		<p class="text-xl text-gray-600">
			Discover the latest insights and articles to help you grow and learn.
		</p>
	</div>

	{#if errorMessage}
		<div class="text-red-600 text-center p-4">
			{errorMessage}
		</div>
	{:else if selectedBlog}
		<div
			class="max-w-5xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden p-6 m-4"
		>
			<div class="flex justify-between items-center mb-8">
				<button
					on:click={backToList}
					class="text-lg font-semibold text-red-600"
				>
					← Back to Blogs
				</button>

				{#if userDetails?.role === 'Admin'}
					<form
						method="POST"
						action="?/deleteBlog"
						use:enhance={() => {
							loading = true;

							return async ({ update }) => {
								await update();
								loading = false;
								selectedBlog = null;
								location.reload();
							};
						}}
					>
						<input
							type="hidden"
							name="id"
							value={selectedBlog.id}
						/>

						<button
							type="submit"
							class="bg-red-600 text-white px-4 py-2 rounded-md"
						>
							Delete Blog
						</button>
					</form>
				{/if}
			</div>

			<div class="relative h-96 overflow-hidden rounded-t-xl">
				<img
					src={selectedBlog.image}
					alt={selectedBlog.title}
					class="w-full h-full object-cover"
				/>
			</div>

			<div class="px-10 py-8 space-y-6">
				<h1 class="text-3xl font-bold text-gray-900">
					{selectedBlog.title}
				</h1>

				<p class="text-sm text-gray-600">
					By {selectedBlog.author}
				</p>

				<time class="text-sm text-gray-600 block mt-2">
					{selectedBlog.date}
				</time>

				<div class="text-gray-800 space-y-4 text-lg leading-relaxed">
					<p>{selectedBlog.article}</p>
				</div>
			</div>
		</div>
	{:else if blogs.length === 0}
		<div class="text-center bg-gray-100 p-10 rounded-lg">
			No Blogs Found
		</div>
	{:else}
		<div class="max-w-3xl mx-auto flex flex-col gap-8">
			{#each blogs as blog}
				<article
					class="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group cursor-pointer"
					on:click={() => handleCardClick(blog)}
				>
					<div class="relative overflow-hidden">
						<img
							src={blog.image}
							alt={blog.title}
							class="w-full h-72 object-cover"
						/>
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

						<p class="text-gray-600 text-sm leading-relaxed">
							{blog.short_description}
						</p>
					</div>
				</article>
			{/each}

			<div class="mt-12 flex justify-center gap-4">
				<button
					on:click={loadPreviousPage}
					disabled={currentPage === 1}
					class="px-4 py-2 border rounded-md"
				>
					Previous
				</button>

				<button
					on:click={loadNextPage}
					disabled={(currentPage * blogsPerPage) >= totalBlogs}
					class="px-4 py-2 border rounded-md"
				>
					Next
				</button>
			</div>
		</div>
	{/if}
</div>