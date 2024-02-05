import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = process.env.NEXT_PUBLIC_PRODUCTION_URL;

	return [
		{
			url: `${baseUrl}`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1,
		},
	];
}
