import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

import { getAboutPage } from "@/lib/data/read/index";

type AboutPageProps = {
	pageTitle: string;
	pageMetaDescription: string;
	heroActionBlock: {
		content: {
			content: { header: { title: string } };
			image: { public_id: string; secure_url: string };
		};
	};
	pasBlock: {
		header: {
			content: {
				header: { title: string; subtitle: string };
				content: { html: string };
			};
		};
	};
	callToAction: {
		image: { public_id: string };
		title: string;
		content: {
			html: string;
		};
		link: {
			label: string;
			url: string;
		};
	};
};

import { AboutContentWidget, AboutHeroWidget } from "@/components/index";

export async function generateMetadata(): Promise<Metadata> {
	const { pageTitle, pageMetaDescription, heroActionBlock }: AboutPageProps =
		await getAboutPage();

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

const AboutPage = async () => {
	const { heroActionBlock, pasBlock, callToAction }: AboutPageProps =
		await getAboutPage();

	return (
		<article className="mt-24 space-y-8">
			<section id="hero">
				<AboutHeroWidget
					heroActionBlock={heroActionBlock}
					pasBlock={pasBlock}
				/>
			</section>

			<section id="content">
				<AboutContentWidget callToAction={callToAction} />
			</section>
		</article>
	);
};

export default AboutPage;
