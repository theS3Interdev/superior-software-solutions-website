import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

import { getHomePage } from "@/lib/data/read/index";

import { HomeContentWidget, HomeHeroWidget } from "@/components/index";

type HomePageProps = {
	pageTitle: string;
	pageMetaDescription: string;
	heroActionBlock: {
		content: {
			content: { header: { title: string; subtitle: string } };
			image: { public_id: string };
		};
		links: {
			label: string;
			url: string;
		}[];
	};
};

export async function generateMetadata(): Promise<Metadata> {
	const { pageTitle, pageMetaDescription, heroActionBlock }: HomePageProps =
		await getHomePage();

	return {
		title: pageTitle,
		description: pageMetaDescription,
		openGraph: {
			type: "article",
			images: [
				{
					width: 1200,
					height: 630,
					url: getCldOgImageUrl({
						src: heroActionBlock.content.image.public_id,
						format: "jpg",
					}),
				},
			],
		},
	};
}

const HomePage = async () => {
	const { heroActionBlock }: HomePageProps = await getHomePage();

	return (
		<article className="mt-24 space-y-8">
			<section id="hero">
				<HomeHeroWidget heroActionBlock={heroActionBlock} />
			</section>

			<section id="content">
				<HomeContentWidget />
			</section>
		</article>
	);
};

export default HomePage;
