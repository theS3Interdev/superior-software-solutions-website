import { AboutContentWidget, AboutHeroWidget } from "@/components/index";

const AboutPage = () => {
	return (
		<article className="mt-24 space-y-8">
			<section id="hero">
				<AboutHeroWidget />
			</section>

			<section id="content">
				<AboutContentWidget />
			</section>
		</article>
	);
};

export default AboutPage;
