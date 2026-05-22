// src/routes/blog/+page.server.js

import { fail } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, url }) {
	const supabase = locals.supabase;

	const currentPage = Number(url.searchParams.get('page') || '1');
	const blogsPerPage = 3;

	const from = (currentPage - 1) * blogsPerPage;
	const to = from + blogsPerPage - 1;

	const { data: blogs, error, count } = await supabase
		.from('blogs')
		.select('*', { count: 'exact' })
		.order('date', { ascending: false })
		.range(from, to);

	if (error) {
		console.error(error);

		return {
			blogs: [],
			totalBlogs: 0,
			currentPage,
			errorMessage: error.message,
			userDetails: locals.userDetails || {}
		};
	}

	return {
		blogs: blogs || [],
		totalBlogs: count || 0,
		currentPage,
		blogsPerPage,
		errorMessage: '',
		userDetails: locals.userDetails || {}
	};
}

/** @type {import('./$types').Actions} */
export const actions = {
	createBlog: async ({ request, locals }) => {
		const supabase = locals.supabase;
		const formData = await request.formData();

		const title = formData.get('title');
		const short_description = formData.get('short_description');
		const article = formData.get('article');
		const image = formData.get('image');
		const author = formData.get('author');
		const date = new Date().toISOString().split('T')[0];

		const { error } = await supabase.from('blogs').insert([
			{
				title,
				short_description,
				article,
				image,
				author,
				date
			}
		]);

		if (error) {
			console.error(error);

			return fail(500, {
				errorMessage: error.message
			});
		}

		return {
			success: true
		};
	},

	deleteBlog: async ({ request, locals }) => {
		const supabase = locals.supabase;
		const formData = await request.formData();

		const id = formData.get('id');

		const { error } = await supabase.from('blogs').delete().eq('id', id);

		if (error) {
			console.error(error);

			return fail(500, {
				errorMessage: error.message
			});
		}

		return {
			success: true
		};
	}
};