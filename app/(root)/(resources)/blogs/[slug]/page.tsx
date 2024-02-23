import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

import { getBlogBySlug } from "@/lib/data/read/index";

import { BlogContentWidget, BlogHeroWidget } from "@/components/index";

const url = process.env.NEXT_PUBLIC_PRODUCTION_URL!;

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
		secure_url: string;
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
};

type ParamsProps = {
	params: { slug: string };
};

export async function generateMetadata({
	params,
}: ParamsProps): Promise<Metadata> {
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

const BlogPage = async ({ params }: ParamsProps) => {
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

	const { alternates } = await generateMetadata({ params });

	const blogAbsoluteUrl = `${url}${alternates?.canonical}`;

	return (
		<article className="mt-24 space-y-8">
			<section id="hero">
				<BlogHeroWidget
					authorName={author.name}
					authorImage={author.image.public_id}
					category={category.title}
					date={date}
					excerpt={excerpt}
					image={image.secure_url}
					title={title}
				/>
			</section>

			<section id="content">
				<BlogContentWidget
					authorName={author.name}
					authorImage={author.image.public_id}
					authorBio={author.bio.html}
					content={content.html}
					shareSummary={excerpt}
					shareTitle={title}
					shareUrl={blogAbsoluteUrl}
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
