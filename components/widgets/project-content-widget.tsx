import { Container } from "@/components/container";
import {
	Badge,
	CallToActionBlock,
	ContentDisplayBlock,
	HeaderDisplayBlock,
	Separator,
	SocialMediaSharingBlock,
} from "@/components/index";

type ProjectContentWidgetProps = {
	excerpt: string;
	solutions: { title: string }[];
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
	excerpt,
	solutions,
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
						<Separator className="mb-5" />

						<div>
							{solutions.map((service, index) =>
								index === 0 ? (
									<Badge key={index} className="m-[1px] text-sm">
										{service.title}
									</Badge>
								) : (
									service.title && (
										<Badge key={index} className="m-[1px] text-sm">
											{service.title}
										</Badge>
									)
								),
							)}
						</div>

						<Separator className="mt-5" />
					</div>

					<div>
						<HeaderDisplayBlock subtitle={excerpt} />
					</div>

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
