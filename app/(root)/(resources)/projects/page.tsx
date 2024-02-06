import { ProjectsContentWidget, ProjectsHeroWidget } from "@/components/index";

const ProjectsPage = () => {
	return (
		<article className="mt-24 space-y-8">
			<section id="hero">
				<ProjectsHeroWidget />

				<ProjectsContentWidget />
			</section>
		</article>
	);
};

export default ProjectsPage;
