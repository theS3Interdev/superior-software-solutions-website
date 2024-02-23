import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

import { getPrivacyPolicyPage } from "@/lib/data/read/index";

import {
	PrivacyPolicyContentWidget,
	PrivacyPolicyHeroWidget,
} from "@/components/index";

type PrivacyPolicyPageProps = {
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
};

export async function generateMetadata(): Promise<Metadata> {
	const {
		pageTitle,
		pageMetaDescription,
		heroActionBlock,
	}: PrivacyPolicyPageProps = await getPrivacyPolicyPage();

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

const PrivacyPolicyPage = async () => {
	const { heroActionBlock, pasBlock }: PrivacyPolicyPageProps =
		await getPrivacyPolicyPage();

	return (
		<article className="mt-24 space-y-8">
			<section id="hero">
				<PrivacyPolicyHeroWidget
					heroActionBlock={heroActionBlock}
					pasBlock={pasBlock}
				/>
			</section>

			<section id="content">
				<PrivacyPolicyContentWidget pasBlock={pasBlock} />
			</section>
		</article>
	);
};

export default PrivacyPolicyPage;
