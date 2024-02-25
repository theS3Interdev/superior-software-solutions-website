import { Container } from "@/components/container";
import {
	BenefitCardBlock,
	CallToActionBlock,
	HeaderDisplayBlock,
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
	benefitsBlock: {
		header: {
			content: {
				header: {
					title: string;
					subtitle: string;
				};
			};
		};
		list: {
			content: {
				header: {
					title: string;
					subtitle: string;
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
	benefitsBlock,
	callToAction,
}: AboutContentWidgetProps) => {
	return (
		<Container>
			<div className="py-8">
				<div className="space-y-16">
					<div>
						<PASJumbotronBlock
							image={pasBlock.header.image.public_id}
							content={pasBlock.header.content.content.html}
							pasBlock={pasBlock}
							displayTitle={true}
						/>
					</div>

					<div className="space-y-8">
						<div>
							<HeaderDisplayBlock
								title={benefitsBlock.header.content.header.title}
								subtitle={benefitsBlock.header.content.header.subtitle}
							/>
						</div>

						<div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
							{benefitsBlock.list.map((benefit, index) => (
								<BenefitCardBlock
									key={index}
									title={benefit.content.header.title}
									content={benefit.content.header.subtitle}
								/>
							))}
						</div>
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
