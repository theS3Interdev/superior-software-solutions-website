import { Container } from "@/components/container";
import { CallToActionBlock, Separator } from "@/components/index";

type AboutContentWidgetProps = {
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

export const AboutContentWidget = ({
	callToAction,
}: AboutContentWidgetProps) => {
	return (
		<Container>
			<div className="py-8">
				<div className="space-y-8">
					<Separator className="my-8" />

					<div>
						<CallToActionBlock
							image={callToAction.image.public_id}
							title={callToAction.title}
							content={callToAction.content.html}
							label={callToAction.link.label}
							url={callToAction.link.url}
						/>
					</div>
				</div>
			</div>
		</Container>
	);
};
