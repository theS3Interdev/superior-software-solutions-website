import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

import { getProjectsPage } from "@/lib/data/read/index";

type ProjectsPageProps = {
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

import { ProjectsContentWidget, ProjectsHeroWidget } from "@/components/index";

export async function generateMetadata(): Promise<Metadata> {
	const { pageTitle, pageMetaDescription, heroActionBlock }: ProjectsPageProps =
		await getProjectsPage();

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

const ProjectsPage = async () => {
	const { heroActionBlock, pasBlock, callToAction }: ProjectsPageProps =
		await getProjectsPage();

	return (
		<article className="mt-24 space-y-8">
			<section id="hero">
				<ProjectsHeroWidget heroActionBlock={heroActionBlock} />
			</section>

			<section id="content">
				<ProjectsContentWidget
					pasBlock={pasBlock}
					callToAction={callToAction}
				/>
			</section>
		</article>
	);
};

export default ProjectsPage;
