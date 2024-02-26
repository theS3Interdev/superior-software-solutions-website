import { getLatestBlogSummary } from "@/lib/data/read/index";

import { Container } from "@/components/container";
import {
	BlogsCarouselBlock,
	CallToActionBlock,
	HeaderDisplayBlock,
	HomeBenefitCardBlock,
	HomeProcessCardBlock,
	PASJumbotronBlock,
	Separator,
	TestimonialCardBlock,
} from "@/components/index";

type HomeContentWidgetProps = {
	pasBlock: {
		header: {
			content: {
				header: {
					title: string;
					subtitle: string;
				};
				content: {
					html: string;
				};
			};
			image: { public_id: string };
		};
		list: {
			content: {
				header: {
					title: string;
				};
				content: {
					html: string;
				};
			};
		}[];
	};
	benefitsBlock: {
		header: {
			content: {
				header: {
					title: string;
					subtitle: string;
				};
			};
		};
		list: {
			content: {
				header: {
					title: string;
					subtitle: string;
				};
				content: { html: string };
			};
			image: { public_id: string };
		}[];
	};
	testimonialsHeader: {
		header: {
			title: string;
			subtitle: string;
		};
	};
	testimonials: {
		image: { public_id: string };
		name: string;
		title: string;
		rating: number;
		content: { html: string };
	}[];
	processBlock: {
		header: {
			content: {
				header: {
					title: string;
					subtitle: string;
				};
			};
		};
		list: {
			content: {
				header: {
					title: string;
				};
				content: {
					html: string;
				};
			};
			image: {
				public_id: string;
			};
		}[];
	};
	blogsHeader: {
		header: {
			title: string;
			subtitle: string;
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

type BlogProps = {
	title: string;
	slug: string;
	date: string;
	image: { public_id: string };
	excerpt: string;
};

export const HomeContentWidget = async ({
	pasBlock,
	benefitsBlock,
	testimonialsHeader,
	testimonials,
	processBlock,
	blogsHeader,
	callToAction,
}: HomeContentWidgetProps) => {
	const summary: BlogProps[] = await getLatestBlogSummary();

	return (
		<>
			<Container>
				<div className="my-20">
					<div className="space-y-8">
						<div>
							<PASJumbotronBlock
								image={pasBlock.header.image.public_id}
								content={pasBlock.header.content.content.html}
								pasBlock={pasBlock}
								displayTitle={false}
								title={pasBlock.header.content.header.title}
								subtitle={pasBlock.header.content.header.subtitle}
							/>
						</div>
					</div>
				</div>
			</Container>

			<div className="my-20 bg-secondary py-8">
				<Container>
					<div className="space-y-8">
						<div>
							<HeaderDisplayBlock
								title={benefitsBlock.header.content.header.title}
								subtitle={benefitsBlock.header.content.header.subtitle}
							/>
						</div>

						<div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
							{benefitsBlock.list.map((benefit, index) => (
								<HomeBenefitCardBlock
									key={index}
									image={benefit.image.public_id}
									title={benefit.content.header.title}
									subtitle={benefit.content.header.subtitle}
									content={benefit.content.content.html}
								/>
							))}
						</div>
					</div>
				</Container>
			</div>

			<Container>
				<div className="my-20">
					<div className="space-y-20">
						<div className="space-y-8">
							<div>
								<HeaderDisplayBlock
									title={testimonialsHeader.header.title}
									subtitle={testimonialsHeader.header.subtitle}
								/>
							</div>

							<div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
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
						</div>
					</div>
				</div>
			</Container>

			<div className="my-20 bg-secondary py-8">
				<Container>
					<div className="space-y-8">
						<div>
							<HeaderDisplayBlock
								title={processBlock.header.content.header.title}
								subtitle={processBlock.header.content.header.subtitle}
							/>
						</div>

						<div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
							{processBlock.list.map((process, index) => (
								<HomeProcessCardBlock
									key={index}
									image={process.image.public_id}
									title={process.content.header.title}
									content={process.content.content.html}
								/>
							))}
						</div>
					</div>
				</Container>
			</div>

			<Container>
				<div className="my-20">
					<div className="space-y-8">
						<div className="space-y-8">
							<div>
								<HeaderDisplayBlock
									title={blogsHeader.header.title}
									subtitle={blogsHeader.header.subtitle}
								/>
							</div>

							<div>
								<BlogsCarouselBlock summary={summary} />
							</div>
						</div>

						<Separator className="my-8" />

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
		</>
	);
};
