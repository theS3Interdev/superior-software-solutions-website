import { Container } from "@/components/container";
import { CallToActionBlock } from "@/components/index";

type HomeContentWidgetProps = {
	callToAction: {
		image: { public_id: string };
		title: string;
		content: {
			html: string;
		};
		link: {
			label: string;
			url: string;
		};
	};
};

export const HomeContentWidget = ({ callToAction }: HomeContentWidgetProps) => {
	return (
		<Container>
			<div className="py-8">
				<div className="space-y-8">
					<div>Home Content Widget</div>

					<CallToActionBlock
						image={callToAction.image.public_id}
						title={callToAction.title}
						content={callToAction.content.html}
						label={callToAction.link.label}
						url={callToAction.link.url}
					/>
				</div>
			</div>
		</Container>
	);
};
