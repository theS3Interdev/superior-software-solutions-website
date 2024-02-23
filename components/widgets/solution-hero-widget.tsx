import { HeroDisplayAlternateBlock } from "@/components/index";

type SolutionHeroWidgetProps = {
	title: string;
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
};

export const SolutionHeroWidget = ({
	title,
	heroActionBlock,
}: SolutionHeroWidgetProps) => {
	return (
		<div className="mx-1">
			<HeroDisplayAlternateBlock
				image={heroActionBlock.content.image.secure_url}
				subtitleHS={heroActionBlock.content.content.header.subtitle}
				subtitleHT={heroActionBlock.content.content.header.title}
				title={title}
			/>
		</div>
	);
};
