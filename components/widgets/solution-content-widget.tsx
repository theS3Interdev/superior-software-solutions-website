import { Container } from "@/components/container";
import {
	BenefitCardBlock,
	CallToActionBlock,
	HeaderDisplayBlock,
	PASHeaderBlock,
	ProjectsCarouselBlock,
	Separator,
	SocialMediaSharingBlock,
	SolutionsPriceListBlock,
} from "@/components/index";

type SolutionContentWidgetProps = {
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
			};
		}[];
	};
	projectsHeaderBlock: {
		header: {
			title: string;
			subtitle: string;
		};
	};
	projects: {
		title: string;
		slug: string;
		image: { public_id: string };
		excerpt: string;
	}[];
	pricingHeaderBlock?: {
		header: {
			title: string;
			subtitle: string;
		};
	};
	solutionPrices: {
		title: string;
		image: { public_id: string };
		description: {
			html: string;
		};
		priceDetails: {
			list: {
				header: {
					title: string;
				};
				content: {
					html: string;
				};
			}[];
		};
	}[];
	shareSummary: string;
	shareTitle: string;
	shareUrl: string;
	ctaImage: string;
	ctaTitle: string;
	ctaContent: string;
	ctaLabel: string;
	ctaUrl: string;
};

export const SolutionContentWidget = ({
	pasBlock,
	benefitsBlock,
	projectsHeaderBlock,
	projects,
	pricingHeaderBlock,
	solutionPrices,
	shareSummary,
	shareTitle,
	shareUrl,
	ctaImage,
	ctaTitle,
	ctaContent,
	ctaLabel,
	ctaUrl,
}: SolutionContentWidgetProps) => {
	return (
		<Container>
			<div className="py-8">
				<div className="space-y-16">
					<div>
						<PASHeaderBlock
							image={pasBlock.header.image.public_id}
							title={pasBlock.header.content.header.title}
							subtitle={pasBlock.header.content.header.subtitle}
							content={pasBlock.header.content.content.html}
						/>
					</div>

					<div className="space-y-8">
						<div>
							<HeaderDisplayBlock
								title={benefitsBlock.header.content.header.title}
								subtitle={benefitsBlock.header.content.header.subtitle}
							/>
						</div>

						<div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
							{benefitsBlock.list.map((benefit, index) => (
								<BenefitCardBlock
									key={index}
									title={benefit.content.header.title}
									content={benefit.content.header.subtitle}
								/>
							))}
						</div>
					</div>

					<div className="space-y-8">
						<div>
							<HeaderDisplayBlock
								title={projectsHeaderBlock.header.title}
								subtitle={projectsHeaderBlock.header.subtitle}
							/>
						</div>

						<div>
							<ProjectsCarouselBlock projects={projects} />
						</div>
					</div>

					{pricingHeaderBlock && (
						<div className="space-y-8">
							<div>
								<HeaderDisplayBlock
									title={pricingHeaderBlock.header.title}
									subtitle={pricingHeaderBlock.header.subtitle}
								/>
							</div>

							<div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
								{solutionPrices.map((price, index) => (
									<SolutionsPriceListBlock
										key={index}
										image={price.image.public_id}
										title={price.title}
										description={price.description.html}
										priceDetails={price.priceDetails}
									/>
								))}
							</div>
						</div>
					)}

					<div className="space-y-8">FAQs</div>

					<div className="my-5 items-center justify-between sm:flex">
						<div className="mb-5">
							<p className="mb-3 font-medium">Share this solution:</p>
							<div className="flex items-center sm:justify-end">
								<SocialMediaSharingBlock
									shareSummary={shareSummary}
									shareTitle={shareTitle}
									shareUrl={shareUrl}
								/>
							</div>
						</div>
					</div>

					<Separator className="my-8" />

					<div>
						<CallToActionBlock
							image={ctaImage}
							title={ctaTitle}
							content={ctaContent}
							label={ctaLabel}
							url={ctaUrl}
						/>
					</div>
				</div>
			</div>
		</Container>
	);
};
