import { HomeContentWidget, HomeHeroWidget } from "@/components/index";

const HomePage = () => {
	return (
		<article className="mt-24 space-y-8">
			<section id="hero">
				<HomeHeroWidget />

				<HomeContentWidget />
			</section>
		</article>
	);
};

export default HomePage;
