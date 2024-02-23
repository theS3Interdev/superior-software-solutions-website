import { HeroDisplayAlternateBlock } from "@/components/index";

type BlogsHeroWidgetProps = {
	heroActionBlock: {
		content: {
			content: { header: { title: string } };
			image: { public_id: string; secure_url: string };
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

export const BlogsHeroWidget = ({
	heroActionBlock,
	pasBlock,
}: BlogsHeroWidgetProps) => {
	return (
		<div className="mx-1">
			<HeroDisplayAlternateBlock
				image={heroActionBlock.content.image.secure_url}
				title={heroActionBlock.content.content.header.title}
				subtitleHT={pasBlock.header.content.header.title}
				subtitleHS={pasBlock.header.content.header.subtitle}
			/>
		</div>
	);
};
