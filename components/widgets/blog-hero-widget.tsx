import { HeroDisplayBlock } from "@/components/index";

type BlogHeroWidgetProps = {
	title: string;
	image: string;
};

export const BlogHeroWidget = ({ title, image }: BlogHeroWidgetProps) => {
	return (
		<div className="mx-1">
			<HeroDisplayBlock title={title} image={image} />
		</div>
	);
};
