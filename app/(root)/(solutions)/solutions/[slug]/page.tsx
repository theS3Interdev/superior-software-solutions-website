import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

import { getSolutionBySlug } from "@/lib/data/read/index";

import { SolutionContentWidget, SolutionHeroWidget } from "@/components/index";

const url = process.env.NEXT_PUBLIC_PRODUCTION_URL!;

type SolutionPageProps = {
	title: string;
	slug: string;
	metaDescription: string;
	heroActionBlock: {
		content: {
			content: {
				header: {
					title: string;
					subtitle: string;
				};
			};
			image: { public_id: string; secure_url: string };
		};
	};
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
			}[];
		};
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
	faqHeader: {
		header: {
			title: string;
			subtitle: string;
		};
	};
	faqs: {
		title: string;
		faqs: {
			list: {
				header: {
					title: string;
				};
				content: {
					html: string;
				};
			}[];
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

type ParamsProps = {
	params: { slug: string };
};

export async function generateMetadata({
	params,
}: ParamsProps): Promise<Metadata> {
	const { metaDescription, heroActionBlock, title }: SolutionPageProps =
		await getSolutionBySlug(params.slug);

	return {
		title: title,
		description: metaDescription,
		alternates: {
			canonical: `/solutions/${params.slug}`,
		},
		openGraph: {
			title: title,
			description: metaDescription,
			type: "article",
			images: [
				{
					width: 1200,
					height: 630,
					url: getCldOgImageUrl({
						src: heroActionBlock.content.image.public_id,
						format: "jpg",
					}),
				},
			],
		},
	};
}

const SolutionPage = async ({ params }: ParamsProps) => {
	const {
		title,
		metaDescription,
		heroActionBlock,
		pasBlock,
		benefitsBlock,
		projectsHeaderBlock,
		projects,
		pricingHeaderBlock,
		solutionPrices,
		faqHeader,
		faqs,
		callToAction,
	} = await getSolutionBySlug(params.slug);

	const { alternates } = await generateMetadata({ params });

	const solutionAbsoluteUrl = `${url}${alternates?.canonical}`;

	return (
		<article className="mt-24 space-y-8">
			<section id="hero">
				<SolutionHeroWidget title={title} heroActionBlock={heroActionBlock} />
			</section>

			<section id="content">
				<SolutionContentWidget
					pasBlock={pasBlock}
					benefitsBlock={benefitsBlock}
					projectsHeaderBlock={projectsHeaderBlock}
					projects={projects}
					pricingHeaderBlock={pricingHeaderBlock}
					solutionPrices={solutionPrices}
					faqHeader={faqHeader}
					faqs={faqs}
					shareSummary={metaDescription}
					shareTitle={title}
					shareUrl={solutionAbsoluteUrl}
					ctaImage={callToAction.image.public_id}
					ctaTitle={callToAction.title}
					ctaContent={callToAction.content.html}
					ctaLabel={callToAction.link.label}
					ctaUrl={callToAction.link.url}
				/>
			</section>
		</article>
	);
};

export default SolutionPage;
