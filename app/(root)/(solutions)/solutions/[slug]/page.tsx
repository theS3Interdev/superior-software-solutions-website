import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

import { getSolutionBySlug } from "@/lib/data/read/index";

import { SolutionContentWidget, SolutionHeroWidget } from "@/components/index";

const url = process.env.NEXT_PUBLIC_PRODUCTION_URL!;

type SolutionPageProps = {
	title: string;
	slug: string;
	metaDescription: string;
	heroActionBlock: {
		content: {
			content: {
				header: {
					title: string;
					subtitle: string;
				};
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

type ParamsProps = {
	params: { slug: string };
};

export async function generateMetadata({
	params,
}: ParamsProps): Promise<Metadata> {
	const { metaDescription, heroActionBlock, title }: SolutionPageProps =
		await getSolutionBySlug(params.slug);

	return {
		title: title,
		description: metaDescription,
		alternates: {
			canonical: `/solutions/${params.slug}`,
		},
		openGraph: {
			title: title,
			description: metaDescription,
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

const SolutionPage = async ({ params }: ParamsProps) => {
	const { title, heroActionBlock, callToAction } = await getSolutionBySlug(
		params.slug,
	);

	return (
		<article className="mt-24 space-y-8">
			<section id="hero">
				<SolutionHeroWidget title={title} heroActionBlock={heroActionBlock} />
			</section>

			<section id="content">
				<SolutionContentWidget />
			</section>
		</article>
	);
};

export default SolutionPage;
