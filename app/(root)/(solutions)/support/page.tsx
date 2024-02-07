import { SupportContentWidget, SupportHeroWidget } from "@/components/index";

const SupportPage = () => {
	return (
		<article className="mt-24 space-y-8">
			<section id="hero">
				<SupportHeroWidget />
			</section>

			<section id="content">
				<SupportContentWidget />
			</section>
		</article>
	);
};

export default SupportPage;
