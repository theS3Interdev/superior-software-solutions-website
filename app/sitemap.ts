import { getAllBlogSummaryCount } from "@/lib/data/read/index";

type BlogType = {
	slug: string;
};

export default async function sitemap() {
	const baseUrl = process.env.NEXT_PUBLIC_PRODUCTION_URL!;

	const blogs = await getAllBlogSummaryCount();

	const blogsUrl = blogs.map((blog: BlogType) => ({
		url: `${baseUrl}/blogs/${blog.slug}`,
		lastModified: new Date(),
		changeFrequency: "weekly",
		priority: 0.5,
	}));

	return [
		{
			url: `${baseUrl}`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: `${baseUrl}/blogs`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.5,
		},
		...blogsUrl,
		{
			url: `${baseUrl}/book-a-consult`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.5,
		},
		{
			url: `${baseUrl}/support`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.5,
		},
		{
			url: `${baseUrl}/privacy-policy`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.5,
		},
	];
}
