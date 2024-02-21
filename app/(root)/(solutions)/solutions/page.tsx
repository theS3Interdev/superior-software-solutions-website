import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

import { getSolutionsPage } from "@/lib/data/read/index";

type SolutionsPageProps = {
	pageTitle: string;
	pageMetaDescription: string;
	heroActionBlock: {
		content: {
			content: { header: { title: string } };
			image: { public_id: string };
		};
	};
	pasBlock: {
		header: {
			content: {
				header: { title: string; subtitle: string };
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

import {
	SolutionsContentWidget,
	SolutionsHeroWidget,
} from "@/components/index";

export async function generateMetadata(): Promise<Metadata> {
	const {
		pageTitle,
		pageMetaDescription,
		heroActionBlock,
	}: SolutionsPageProps = await getSolutionsPage();

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

const SolutionsPage = async () => {
	const { heroActionBlock, pasBlock, callToAction }: SolutionsPageProps =
		await getSolutionsPage();

	return (
		<article className="mt-24 space-y-8">
			<section id="hero">
				<SolutionsHeroWidget
					heroActionBlock={heroActionBlock}
					pasBlock={pasBlock}
				/>
			</section>

			<section id="content">
				<SolutionsContentWidget callToAction={callToAction} />
			</section>
		</article>
	);
};

export default SolutionsPage;
