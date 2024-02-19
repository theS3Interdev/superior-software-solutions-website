import {
	getAllBlogSummaryCount,
	getAllProjectSummaryCount,
} from "@/lib/data/read/index";

type SitemapType = {
	slug: string;
};

export default async function sitemap() {
	const baseUrl = process.env.NEXT_PUBLIC_PRODUCTION_URL!;

	const blogs = await getAllBlogSummaryCount();

	const blogsUrl = blogs.map((blog: SitemapType) => ({
		url: `${baseUrl}/blogs/${blog.slug}`,
		lastModified: new Date(),
		changeFrequency: "weekly",
		priority: 0.5,
	}));

	const projects = await getAllProjectSummaryCount();

	const projectUrl = projects.map((project: SitemapType) => ({
		url: `${baseUrl}/projects/${project.slug}`,
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
			url: `${baseUrl}/projects`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.5,
		},
		...projectUrl,
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
