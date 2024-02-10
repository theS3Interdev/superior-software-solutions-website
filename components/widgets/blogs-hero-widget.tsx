import { HeroDisplayBlock } from "@/components/index";

type BlogsHeroWidgetProps = {
	heroActionBlock: {
		content: {
			content: { header: { title: string } };
			image: { public_id: string };
		};
	};
};

export const BlogsHeroWidget = ({ heroActionBlock }: BlogsHeroWidgetProps) => {
	return (
		<div className="mx-1">
			<HeroDisplayBlock
				title={heroActionBlock.content.content.header.title}
				image={heroActionBlock.content.image.public_id}
			/>
		</div>
	);
};
