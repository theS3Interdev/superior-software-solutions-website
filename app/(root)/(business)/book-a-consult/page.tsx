import { ConsultContentWidget, ConsultHeroWidget } from "@/components/index";

const ConsultPage = () => {
	return (
		<article className="mt-24 space-y-8">
			<section id="hero">
				<ConsultHeroWidget />
			</section>

			<section id="content">
				<ConsultContentWidget />
			</section>
		</article>
	);
};

export default ConsultPage;
