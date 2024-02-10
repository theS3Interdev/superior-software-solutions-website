import { getAllTestimonials } from "@/lib/data/read/index";

import { Container } from "@/components/container";
import {
	CallToActionBlock,
	HeaderDisplayBlock,
	TestimonialCardBlock,
} from "@/components/index";

type TestimonialsContentWidgetProps = {
	pasBlock: {
		header: {
			content: {
				header: { title: string; subtitle: string };
				content: { html: string };
			};
		};
	};
	callToAction: {
		image: { public_id: string };
		title: string;
		content: {
			html: string;
		};
		link: {
			label: string;
			url: string;
		};
	};
};

type Testimonial = {
	image: { public_id: string };
	name: string;
	title: string;
	rating: number;
	content: { html: string };
}[];

export const TestimonialsContentWidget = async ({
	pasBlock,
	callToAction,
}: TestimonialsContentWidgetProps) => {
	const testimonials: Testimonial = await getAllTestimonials();

	return (
		<Container>
			<div className="py-8">
				<div className="space-y-8">
					<HeaderDisplayBlock
						title={pasBlock.header.content.header.title}
						subtitle={pasBlock.header.content.header.subtitle}
					/>

					<div>
						{testimonials.length === 0 ? (
							<p className="my-8 text-center leading-loose text-muted-foreground">
								There are currently no client testimonials...
							</p>
						) : (
							<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
								{testimonials.map((testimonial, index) => (
									<TestimonialCardBlock
										key={index}
										image={testimonial.image.public_id}
										name={testimonial.name}
										title={testimonial.title}
										rating={testimonial.rating}
										content={testimonial.content.html}
									/>
								))}
							</div>
						)}
					</div>

					<CallToActionBlock
						image={callToAction.image.public_id}
						title={callToAction.title}
						content={callToAction.content.html}
						label={callToAction.link.label}
						url={callToAction.link.url}
					/>
				</div>
			</div>
		</Container>
	);
};
