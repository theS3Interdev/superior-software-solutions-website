export default async function sitemap() {
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
