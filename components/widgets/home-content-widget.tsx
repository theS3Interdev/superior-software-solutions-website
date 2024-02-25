import { Container } from "@/components/container";
import {
	CallToActionBlock,
	PASJumbotronBlock,
	Separator,
} from "@/components/index";

type HomeContentWidgetProps = {
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

export const HomeContentWidget = ({
	pasBlock,
	callToAction,
}: HomeContentWidgetProps) => {
	return (
		<Container>
			<div className="py-8">
				<div className="space-y-20">
					<div>
						<PASJumbotronBlock
							image={pasBlock.header.image.public_id}
							content={pasBlock.header.content.content.html}
							pasBlock={pasBlock}
							displayTitle={false}
							title={pasBlock.header.content.header.title}
							subtitle={pasBlock.header.content.header.subtitle}
						/>
					</div>

					<Separator className="my-8" />

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
