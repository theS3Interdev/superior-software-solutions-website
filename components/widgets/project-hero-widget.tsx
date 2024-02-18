import { HeroDisplayBlock } from "@/components/index";

type ProjectHeroWidgetProps = { title: string; image: string };

export const ProjectHeroWidget = ({ title, image }: ProjectHeroWidgetProps) => {
	return (
		<div className="mx-1">
			<HeroDisplayBlock title={title} image={image} />
		</div>
	);
};
