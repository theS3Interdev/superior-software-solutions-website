import { HeroDisplayBlock } from "@/components/index";

type ProjectHeroWidgetProps = {
	excerpt: string;
	solutions: { title: string }[];
	title: string;
	image: string;
};

export const ProjectHeroWidget = ({
	excerpt,
	solutions,
	title,
	image,
}: ProjectHeroWidgetProps) => {
	return (
		<div className="mx-1">
			<HeroDisplayBlock
				excerpt={excerpt}
				image={image}
				solutions={solutions}
				title={title}
			/>
		</div>
	);
};
