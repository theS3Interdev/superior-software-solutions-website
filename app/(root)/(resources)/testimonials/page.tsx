import {
	TestimonialsContentWidget,
	TestimonialsHeroWidget,
} from "@/components/index";

const TestimonialsPage = () => {
	return (
		<article className="mt-24 space-y-8">
			<section id="hero">
				<TestimonialsHeroWidget />

				<TestimonialsContentWidget />
			</section>
		</article>
	);
};

export default TestimonialsPage;
