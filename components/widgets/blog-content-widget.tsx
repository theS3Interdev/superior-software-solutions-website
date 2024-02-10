import { Container } from "@/components/container";
import {
	Badge,
	CallToActionBlock,
	ContentDisplayBlock,
	DateDisplayBlock,
	HeaderDisplayBlock,
	HeroDisplayBlock,
	ImageDisplayBlock,
	Separator,
} from "@/components/index";

type BlogContentWidgetProps = {
	title: string;
	image: string;
	authorImage: string;
	authorName: string;
	date: string;
	category: string;
	excerpt: string;
	content: string;
	ctaImage: string;
	ctaTitle: string;
	ctaContent: string;
	ctaLabel: string;
	ctaUrl: string;
};

export const BlogContentWidget = ({
	title,
	image,
	authorImage,
	authorName,
	date,
	category,
	excerpt,
	content,
	ctaImage,
	ctaTitle,
	ctaContent,
	ctaLabel,
	ctaUrl,
}: BlogContentWidgetProps) => {
	return (
		<div>
			<div className="mx-1">
				<HeroDisplayBlock title={title} image={image} />
			</div>

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
		</div>
	);
};
