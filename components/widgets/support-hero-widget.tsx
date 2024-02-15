import { HeroDisplayBlock } from "@/components/index";

type SupportHeroWidgetProps = {
	heroActionBlock: {
		content: {
			content: { header: { title: string } };
			image: { public_id: string };
		};
	};
};

export const SupportHeroWidget = ({
	heroActionBlock,
}: SupportHeroWidgetProps) => {
	return (
		<div className="mx-1">
			<HeroDisplayBlock
				title={heroActionBlock.content.content.header.title}
				image={heroActionBlock.content.image.public_id}
			/>
		</div>
	);
};
