import { Container } from "@/components/container";
import { ContentDisplayBlock } from "@/components/index";

type PrivacyPolicyContentWidgetProps = {
	pasBlock: {
		header: {
			content: {
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
					<div>
						<ContentDisplayBlock
							content={pasBlock.header.content.content.html}
						/>
					</div>
				</div>
			</div>
		</Container>
	);
};
