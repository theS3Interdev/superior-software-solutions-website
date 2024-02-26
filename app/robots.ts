import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	const baseUrl = process.env.NEXT_PUBLIC_PRODUCTION_URL!;

	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/admin", "/private"],
		},
		sitemap: `${baseUrl}/sitemap.xml`,
	};
}
