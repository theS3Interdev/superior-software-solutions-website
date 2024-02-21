import {
	getAllBlogSummaryCount,
	getAllProjectSummaryCount,
	getAllSolutionSummaryCount,
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

	const solutions = await getAllSolutionSummaryCount();

	const solutionUrl = solutions.map((solution: SitemapType) => ({
		url: `${baseUrl}/solutions/${solution.slug}`,
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
			url: `${baseUrl}/solutions`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.5,
		},
		...solutionUrl,
		{
			url: `${baseUrl}/about`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.5,
		},
		{
			url: `${baseUrl}/testimonials`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.5,
		},
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
