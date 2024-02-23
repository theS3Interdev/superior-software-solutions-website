import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

import { getSupportPage } from "@/lib/data/read/index";

type SupportPageProps = {
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
			image: { public_id: string };
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

import { SupportContentWidget, SupportHeroWidget } from "@/components/index";

export async function generateMetadata(): Promise<Metadata> {
	const { pageTitle, pageMetaDescription, heroActionBlock }: SupportPageProps =
		await getSupportPage();

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

const SupportPage = async () => {
	const { heroActionBlock, pasBlock, callToAction }: SupportPageProps =
		await getSupportPage();

	return (
		<article className="mt-24 space-y-8">
			<section id="hero">
				<SupportHeroWidget
					heroActionBlock={heroActionBlock}
					pasBlock={pasBlock}
				/>
			</section>

			<section id="content">
				<SupportContentWidget pasBlock={pasBlock} callToAction={callToAction} />
			</section>
		</article>
	);
};

export default SupportPage;
