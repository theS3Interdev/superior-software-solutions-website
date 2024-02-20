import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

import { getProjectBySlug } from "@/lib/data/read/index";

import { ProjectContentWidget, ProjectHeroWidget } from "@/components/index";

const url = process.env.NEXT_PUBLIC_PRODUCTION_URL!;

type ProjectPageProps = {
	title: string;
	slug: string;
	image: { public_id: string };
	excerpt: string;
	solutions: { title: string }[];
	content: { html: string };
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
	const { excerpt, image, title }: ProjectPageProps = await getProjectBySlug(
		params.slug,
	);

	return {
		title: title,
		description: excerpt,
		alternates: {
			canonical: `/projects/${params.slug}`,
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

const ProjectPage = async ({ params }: ParamsProps) => {
	const { title, image, excerpt, solutions, content, callToAction } =
		await getProjectBySlug(params.slug);

	const { alternates } = await generateMetadata({ params });

	const projectAbsoluteUrl = `${url}${alternates?.canonical}`;

	return (
		<article className="mt-24 space-y-8">
			<section id="hero">
				<ProjectHeroWidget
					title={title}
					image={image.public_id}
					solutions={solutions}
					excerpt={excerpt}
				/>
			</section>

			<section id="content">
				<ProjectContentWidget
					content={content.html}
					shareSummary={excerpt}
					shareTitle={title}
					shareUrl={projectAbsoluteUrl}
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

export default ProjectPage;
