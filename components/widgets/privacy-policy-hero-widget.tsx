import { HeroDisplayAlternateBlock } from "@/components/index";

type PrivacyPolicyHeroWidgetProps = {
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

export const PrivacyPolicyHeroWidget = ({
	heroActionBlock,
	pasBlock,
}: PrivacyPolicyHeroWidgetProps) => {
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
