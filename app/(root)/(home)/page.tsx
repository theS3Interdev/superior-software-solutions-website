import { HomeContentWidget, HomeHeroWidget } from "@/components/index";

const HomePage = () => {
	return (
		<article className="mt-24 space-y-8">
			<section id="hero">
				<HomeHeroWidget />
			</section>

			<section id="content">
				<HomeContentWidget />
			</section>
		</article>
	);
};

export default HomePage;
