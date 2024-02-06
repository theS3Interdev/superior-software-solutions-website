import {
	SolutionsContentWidget,
	SolutionsHeroWidget,
} from "@/components/index";

const SolutionsPage = () => {
	return (
		<article className="mt-24 space-y-8">
			<section id="hero">
				<SolutionsHeroWidget />

				<SolutionsContentWidget />
			</section>
		</article>
	);
};

export default SolutionsPage;
