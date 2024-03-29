import { getAllProjectSummary } from "@/lib/data/read/index";

import { Container } from "@/components/container";
import {
	CallToActionBlock,
	ProjectSummaryCardBlock,
	Separator,
} from "@/components/index";

type ProjectsContentWidgetProps = {
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

type ProjectProps = {
	image: { public_id: string };
	title: string;
	slug: string;
	excerpt: string;
	solutions: { title: string }[];
}[];

export const ProjectsContentWidget = async ({
	callToAction,
}: ProjectsContentWidgetProps) => {
	const summary: ProjectProps = await getAllProjectSummary();

	return (
		<Container>
			<div className="py-8">
				<div className="space-y-8">
					<div>
						{summary.length === 0 ? (
							<p className="my-8 text-center leading-loose text-muted-foreground">
								There are currently no projects...
							</p>
						) : (
							<div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
								{summary.map((project, index) => (
									<ProjectSummaryCardBlock
										key={index}
										image={project.image.public_id}
										title={project.title}
										slug={project.slug}
										excerpt={project.excerpt}
										solutions={project.solutions}
									/>
								))}
							</div>
						)}
					</div>

					<Separator className="my-8" />

					<div>
						<CallToActionBlock
							image={callToAction.image.public_id}
							title={callToAction.title}
							content={callToAction.content.html}
							label={callToAction.link.label}
							url={callToAction.link.url}
						/>
					</div>
				</div>
			</div>
		</Container>
	);
};
