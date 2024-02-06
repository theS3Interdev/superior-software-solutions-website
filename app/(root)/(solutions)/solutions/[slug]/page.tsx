import { SolutionContentWidget, SolutionHeroWidget } from "@/components/index";

const SolutionPage = () => {
	return (
		<article className="mt-24 space-y-8">
			<section id="hero">
				<SolutionHeroWidget />

				<SolutionContentWidget />
			</section>
		</article>
	);
};

export default SolutionPage;
