import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

import { getTestimonialsPage } from "@/lib/data/read/index";

type TestimonialsPageProps = {
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

import {
	TestimonialsContentWidget,
	TestimonialsHeroWidget,
} from "@/components/index";

export async function generateMetadata(): Promise<Metadata> {
	const {
		pageTitle,
		pageMetaDescription,
		heroActionBlock,
	}: TestimonialsPageProps = await getTestimonialsPage();

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

const TestimonialsPage = async () => {
	const { heroActionBlock, pasBlock, callToAction }: TestimonialsPageProps =
		await getTestimonialsPage();

	return (
		<article className="mt-24 space-y-8">
			<section id="hero">
				<TestimonialsHeroWidget
					heroActionBlock={heroActionBlock}
					pasBlock={pasBlock}
				/>
			</section>

			<section id="content">
				<TestimonialsContentWidget callToAction={callToAction} />
			</section>
		</article>
	);
};

export default TestimonialsPage;
