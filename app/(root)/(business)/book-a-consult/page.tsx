import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

import { getBookAConsultPage } from "@/lib/data/read/index";

type ConsultPageProps = {
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

import { ConsultContentWidget, ConsultHeroWidget } from "@/components/index";

export async function generateMetadata(): Promise<Metadata> {
	const { pageTitle, pageMetaDescription, heroActionBlock }: ConsultPageProps =
		await getBookAConsultPage();

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

const ConsultPage = async () => {
	const { heroActionBlock, pasBlock, callToAction }: ConsultPageProps =
		await getBookAConsultPage();

	return (
		<article className="mt-24 space-y-8">
			<section id="hero">
				<ConsultHeroWidget
					heroActionBlock={heroActionBlock}
					pasBlock={pasBlock}
				/>
			</section>

			<section id="content">
				<ConsultContentWidget pasBlock={pasBlock} callToAction={callToAction} />
			</section>
		</article>
	);
};

export default ConsultPage;
