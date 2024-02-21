import { HeroDisplayAlternateBlock } from "@/components/index";

type SolutionsHeroWidgetProps = {
	heroActionBlock: {
		content: {
			content: { header: { title: string } };
			image: { public_id: string };
		};
	};
	pasBlock: {
		header: {
			content: {
				header: { title: string; subtitle: string };
			};
		};
	};
};

export const SolutionsHeroWidget = ({
	heroActionBlock,
	pasBlock,
}: SolutionsHeroWidgetProps) => {
	return (
		<div className="mx-1">
			<HeroDisplayAlternateBlock
				image={heroActionBlock.content.image.public_id}
				title={heroActionBlock.content.content.header.title}
				subtitleHT={pasBlock.header.content.header.title}
				subtitleHS={pasBlock.header.content.header.subtitle}
			/>
		</div>
	);
};
