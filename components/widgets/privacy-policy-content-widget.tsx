import { Container } from "@/components/container";
import { ContentDisplayBlock, HeaderDisplayBlock } from "@/components/index";

type PrivacyPolicyContentWidgetProps = {
	pasBlock: {
		header: {
			content: {
				header: { title: string; subtitle: string };
				content: { html: string };
			};
		};
	};
};

export const PrivacyPolicyContentWidget = ({
	pasBlock,
}: PrivacyPolicyContentWidgetProps) => {
	return (
		<Container>
			<div className="py-8">
				<div className="space-y-8">
					<HeaderDisplayBlock
						title={pasBlock.header.content.header.title}
						subtitle={pasBlock.header.content.header.subtitle}
					/>

					<ContentDisplayBlock content={pasBlock.header.content.content.html} />
				</div>
			</div>
		</Container>
	);
};
