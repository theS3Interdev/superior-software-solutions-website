import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

import { getBlogsPage } from "@/lib/data/read/index";

type BlogsPageProps = {
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

import { BlogsContentWidget, BlogsHeroWidget } from "@/components/index";

export async function generateMetadata(): Promise<Metadata> {
	const { pageTitle, pageMetaDescription, heroActionBlock }: BlogsPageProps =
		await getBlogsPage();

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

const BlogsPage = async () => {
	const { heroActionBlock, pasBlock, callToAction }: BlogsPageProps =
		await getBlogsPage();

	return (
		<article className="mt-24 space-y-8">
			<section id="hero">
				<BlogsHeroWidget
					heroActionBlock={heroActionBlock}
					pasBlock={pasBlock}
				/>
			</section>

			<section id="content">
				<BlogsContentWidget callToAction={callToAction} />
			</section>
		</article>
	);
};

export default BlogsPage;
