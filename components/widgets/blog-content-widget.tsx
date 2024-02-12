import { Container } from "@/components/container";
import {
	Badge,
	BlogAuthorDetailsBlock,
	CallToActionBlock,
	ContentDisplayBlock,
	DateDisplayBlock,
	HeaderDisplayBlock,
	ImageDisplayBlock,
	Separator,
	SocialMediaSharingBlock,
} from "@/components/index";

type BlogContentWidgetProps = {
	authorImage: string;
	authorName: string;
	authorBio: string;
	date: string;
	category: string;
	excerpt: string;
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
	date,
	category,
	excerpt,
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
						<Separator className="mb-5" />

						<div className="flex flex-col md:flex-row md:items-center md:justify-between">
							<div className="flex items-center space-x-1">
								<div className="relative mr-2 h-12 w-12 rounded-full">
									<ImageDisplayBlock
										imageSrc={authorImage}
										imageAlt={authorName}
									/>
								</div>

								<div className="flex flex-col text-muted-foreground">
									<p className="text-sm">{authorName}</p>

									<p className="text-xs">
										<DateDisplayBlock date={date} />
									</p>
								</div>
							</div>

							<div className="my-3 md:my-0">
								<Badge className="m-[1px] text-sm">{category}</Badge>
							</div>
						</div>

						<Separator className="mt-5" />
					</div>

					<HeaderDisplayBlock subtitle={excerpt} />

					<ContentDisplayBlock content={content} />

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

					<BlogAuthorDetailsBlock
						authorName={authorName}
						authorImage={authorImage}
						authorBio={authorBio}
					/>

					<Separator className="my-8" />

					<CallToActionBlock
						image={ctaImage}
						title={ctaTitle}
						content={ctaContent}
						label={ctaLabel}
						url={ctaUrl}
					/>
				</div>
			</div>
		</Container>
	);
};
