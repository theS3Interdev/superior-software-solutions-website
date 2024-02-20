/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
			},
			{
				protocol: "https",
				hostname: "media.graphassets.com",
			},
		],
	},
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
};

module.exports = nextConfig;
