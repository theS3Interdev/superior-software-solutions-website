import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

import { getHomePage } from "@/lib/data/read/index";

import { HomeContentWidget, HomeHeroWidget } from "@/components/index";

type HomePageProps = {
	pageTitle: string;
	pageMetaDescription: string;
	heroActionBlock: {
		content: {
			content: {
				header: {
					title: string;
					subtitle: string;
				};
			};
			image: {
				public_id: string;
				secure_url: string;
			};
		};
		links: {
			label: string;
			url: string;
		}[];
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

export async function generateMetadata(): Promise<Metadata> {
	const { pageTitle, pageMetaDescription, heroActionBlock }: HomePageProps =
		await getHomePage();

	return {
		title: pageTitle,
		description: pageMetaDescription,
		openGraph: {
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

const HomePage = async () => {
	const {
		heroActionBlock,
		pasBlock,
		benefitsBlock,
		testimonialsHeader,
		testimonials,
		processBlock,
		blogsHeader,
		callToAction,
	}: HomePageProps = await getHomePage();

	return (
		<article className="mt-24 space-y-10">
			<section id="hero">
				<HomeHeroWidget heroActionBlock={heroActionBlock} />
			</section>

			<section id="content">
				<HomeContentWidget
					pasBlock={pasBlock}
					benefitsBlock={benefitsBlock}
					testimonialsHeader={testimonialsHeader}
					testimonials={testimonials}
					processBlock={processBlock}
					blogsHeader={blogsHeader}
					callToAction={callToAction}
				/>
			</section>
		</article>
	);
};

export default HomePage;
