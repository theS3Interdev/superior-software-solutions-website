import { ProjectContentWidget, ProjectHeroWidget } from "@/components/index";

const ProjectsPage = () => {
	return (
		<article className="mt-24 space-y-8">
			<section id="hero">
				<ProjectHeroWidget />

				<ProjectContentWidget />
			</section>
		</article>
	);
};

export default ProjectsPage;
