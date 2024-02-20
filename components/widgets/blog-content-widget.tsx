import { Container } from "@/components/container";
import {
	BlogAuthorDetailsBlock,
	CallToActionBlock,
	ContentDisplayBlock,
	Separator,
	SocialMediaSharingBlock,
} from "@/components/index";

type BlogContentWidgetProps = {
	authorImage: string;
	authorName: string;
	authorBio: string;
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

export const BlogContentWidget = ({
	authorImage,
	authorName,
	authorBio,
	content,
	shareSummary,
	shareTitle,
	shareUrl,
	ctaImage,
	ctaTitle,
	ctaContent,
	ctaLabel,
	ctaUrl,
}: BlogContentWidgetProps) => {
	return (
		<Container>
			<div className="py-8">
				<div className="space-y-8">
					<div>
						<ContentDisplayBlock content={content} />
					</div>

					<div className="my-5 items-center justify-between sm:flex">
						<div className="mb-5">
							<p className="mb-3 font-medium">Share this blog post:</p>
							<div className="flex items-center sm:justify-end">
								<SocialMediaSharingBlock
									shareSummary={shareSummary}
									shareTitle={shareTitle}
									shareUrl={shareUrl}
								/>
							</div>
						</div>
					</div>

					<div>
						<BlogAuthorDetailsBlock
							authorName={authorName}
							authorImage={authorImage}
							authorBio={authorBio}
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
