import { Container } from "@/components/container";
import {
	CallToActionBlock,
	PASHeaderBlock,
	Separator,
} from "@/components/index";

type SolutionContentWidgetProps = {
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
	};
	ctaImage: string;
	ctaTitle: string;
	ctaContent: string;
	ctaLabel: string;
	ctaUrl: string;
};

export const SolutionContentWidget = ({
	pasBlock,
	ctaImage,
	ctaTitle,
	ctaContent,
	ctaLabel,
	ctaUrl,
}: SolutionContentWidgetProps) => {
	return (
		<Container>
			<div className="py-8">
				<div className="space-y-8">
					<div>
						<PASHeaderBlock
							image={pasBlock.header.image.public_id}
							title={pasBlock.header.content.header.title}
							subtitle={pasBlock.header.content.header.subtitle}
							content={pasBlock.header.content.content.html}
						/>
					</div>

					<Separator className="my-8" />

					<div>
						<CallToActionBlock
							image={ctaImage}
							title={ctaTitle}
							content={ctaContent}
							label={ctaLabel}
							url={ctaUrl}
						/>
					</div>
				</div>
			</div>
		</Container>
	);
};
