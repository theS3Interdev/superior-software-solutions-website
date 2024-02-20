import { Container } from "@/components/container";
import {
	CallToActionBlock,
	ContentDisplayBlock,
	Separator,
	SocialMediaSharingBlock,
} from "@/components/index";

type ProjectContentWidgetProps = {
	content: string;
	shareSummary: string;
	shareTitle: string;
	shareUrl: string;
	ctaImage: string;
	ctaTitle: string;
	ctaContent: string;
	ctaLabel: string;
	ctaUrl: string;
};

export const ProjectContentWidget = ({
	content,
	shareSummary,
	shareTitle,
	shareUrl,
	ctaImage,
	ctaTitle,
	ctaContent,
	ctaLabel,
	ctaUrl,
}: ProjectContentWidgetProps) => {
	return (
		<Container>
			<div className="py-8">
				<div className="space-y-8">
					<div>
						<ContentDisplayBlock content={content} />
					</div>

					<div className="my-5 items-center justify-between sm:flex">
						<div className="mb-5">
							<p className="mb-3 font-medium">Share this project:</p>
							<div className="flex items-center sm:justify-end">
								<SocialMediaSharingBlock
									shareSummary={shareSummary}
									shareTitle={shareTitle}
									shareUrl={shareUrl}
								/>
							</div>
						</div>
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
