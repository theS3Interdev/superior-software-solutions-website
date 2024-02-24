import { Container } from "@/components/container";
import {
	CallToActionBlock,
	PASJumbotronBlock,
	Separator,
} from "@/components/index";

type AboutContentWidgetProps = {
	pasBlock: {
		header: {
			content: {
				header: {
					title: string;
					subtitle: string;
				};
				content: {
					html: string;
				};
			};
			image: { public_id: string };
		};
		list: {
			content: {
				header: {
					title: string;
				};
				content: {
					html: string;
				};
			};
		}[];
	};
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
	pasBlock,
	callToAction,
}: AboutContentWidgetProps) => {
	return (
		<Container>
			<div className="py-8">
				<div className="space-y-8">
					<div>
						<PASJumbotronBlock
							image={pasBlock.header.image.public_id}
							content={pasBlock.header.content.content.html}
							pasBlock={pasBlock}
						/>
					</div>

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
