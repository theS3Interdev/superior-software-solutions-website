import { HeroDisplayBlock } from "@/components/index";

type ProjectsHeroWidgetProps = {
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

export const ProjectsHeroWidget = ({
	heroActionBlock,
	pasBlock,
}: ProjectsHeroWidgetProps) => {
	return (
		<div className="mx-1">
			<HeroDisplayBlock
				image={heroActionBlock.content.image.secure_url}
				title={heroActionBlock.content.content.header.title}
				subtitleHT={pasBlock.header.content.header.title}
				subtitleHS={pasBlock.header.content.header.subtitle}
			/>
		</div>
	);
};
