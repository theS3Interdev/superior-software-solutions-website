import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

import { getBlogBySlug } from "@/lib/data/read/index";

import { BlogContentWidget } from "@/components/index";

const url = process.env.NEXT_PUBLIC_PRODUCTION_URL;

type BlogPageProps = {
	title: string;
	slug: string;
	author: {
		image: { public_id: string };
		name: string;
		bio: {
			html: string;
		};
	};
	date: string;
	category: {
		title: string;
	};
	image: {
		public_id: string;
	};
	excerpt: string;
	content: {
		html: string;
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
	params: { slug: string };
};

export async function generateMetadata({
	params,
}: BlogPageProps): Promise<Metadata> {
	const { excerpt, image, title }: BlogPageProps = await getBlogBySlug(
		params.slug,
	);

	return {
		title: title,
		description: excerpt,
		alternates: {
			canonical: `/blogs/${params.slug}`,
		},
		openGraph: {
			title: title,
			description: excerpt,
			type: "article",
			images: [
				{
					width: 1200,
					height: 630,
					url: getCldOgImageUrl({
						src: image.public_id,
						format: "jpg",
					}),
				},
			],
		},
	};
}

const BlogPage = async ({ params }: BlogPageProps) => {
	const {
		title,
		image,
		author,
		date,
		category,
		excerpt,
		content,
		callToAction,
	}: BlogPageProps = await getBlogBySlug(params.slug);

	return (
		<article className="mt-24 space-y-8">
			<section id="content">
				<BlogContentWidget
					title={title}
					image={image.public_id}
					authorName={author.name}
					authorImage={author.image.public_id}
					date={date}
					category={category.title}
					excerpt={excerpt}
					content={content.html}
					ctaImage={callToAction.image.public_id}
					ctaTitle={callToAction.title}
					ctaContent={callToAction.content.html}
					ctaLabel={callToAction.link.label}
					ctaUrl={callToAction.link.url}
				/>
			</section>
		</article>
	);
};

export default BlogPage;
