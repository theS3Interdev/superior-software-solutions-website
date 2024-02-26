import { MetadataRoute } from "next";

import {
	getAllBlogSummary,
	getAllProjectSummary,
	getAllSolutionSummary,
} from "@/lib/data/read/index";

type ResponseProps = {
	blogs: string;
	projects: string;
	slug: string;
	solutions: string;
}[];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = process.env.NEXT_PUBLIC_PRODUCTION_URL!;

	const blogs: ResponseProps = await getAllBlogSummary();

	const blogsUrl: MetadataRoute.Sitemap = blogs.map(({ slug }) => ({
		url: `${baseUrl}/blogs/${slug}`,
		lastModified: new Date(),
		changeFrequency: "weekly",
		priority: 0.8,
	}));

	const projects: ResponseProps = await getAllProjectSummary();

	const projectUrl: MetadataRoute.Sitemap = projects.map(({ slug }) => ({
		url: `${baseUrl}/projects/${slug}`,
		lastModified: new Date(),
		changeFrequency: "weekly",
		priority: 0.8,
	}));

	const solutions: ResponseProps = await getAllSolutionSummary();

	const solutionUrl: MetadataRoute.Sitemap = solutions.map(({ slug }) => ({
		url: `${baseUrl}/solutions/${slug}`,
		lastModified: new Date(),
		changeFrequency: "weekly",
		priority: 0.8,
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
			priority: 0.8,
		},
		...blogsUrl,
		{
			url: `${baseUrl}/projects`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		...projectUrl,
		{
			url: `${baseUrl}/solutions`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
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
