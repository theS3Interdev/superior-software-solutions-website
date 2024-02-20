import { Container } from "@/components/container";
import {
	Badge,
	DateDisplayBlock,
	HeaderDisplayBlock,
	ImageDisplayBlock,
	Separator,
} from "@/components/index";

type HeroDisplayAlternateBlockProps = {
	image: string;
	title?: string;
	subtitleHT?: string;
	subtitleHS?: string;
	category?: string;
	excerpt?: string;
	authorImage?: string;
	authorName?: string;
	date?: string;
	solutions?: { title: string }[];
};

export const HeroDisplayAlternateBlock = ({
	image,
	title,
	subtitleHT,
	subtitleHS,
	category,
	excerpt,
	authorImage,
	authorName,
	date,
	solutions,
}: HeroDisplayAlternateBlockProps) => {
	return (
		<Container>
			<div className="flex flex-col space-y-5 py-10 lg:h-[32rem] lg:flex-row lg:items-center lg:py-16">
				<div className="w-full lg:w-1/2">
					{category && (
						<div className="mb-3">
							<Badge className="m-[1px] text-sm">{category}</Badge>
						</div>
					)}

					{solutions &&
						solutions.map((service, index) =>
							index === 0 ? (
								<Badge key={index} className="m-[1px] mb-3 text-sm">
									{service.title}
								</Badge>
							) : (
								service.title && (
									<Badge key={index} className="m-[1px] mb-3 text-sm">
										{service.title}
									</Badge>
								)
							),
						)}

					{title && (
						<div className="lg:max-w-lg">
							<h1 className="text-pretty text-3xl font-semibold tracking-wide lg:text-4xl">
								{title}
							</h1>

							{subtitleHT && subtitleHS && (
								<div className="mt-3 w-full">
									<Separator className="my-3" />

									<p className="text-pretty text-xl leading-loose text-muted-foreground">
										<span>{subtitleHT}</span>: <span>{subtitleHS}</span>
									</p>

									<Separator className="my-3" />
								</div>
							)}

							{excerpt && (
								<div className="my-3 w-full">
									<HeaderDisplayBlock subtitle={excerpt} />
								</div>
							)}
						</div>
					)}

					{authorName && authorImage && date && (
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
					)}
				</div>

				<div className="flex h-96 w-full items-center justify-center lg:w-1/2">
					<div className="relative h-full w-full rounded-lg border">
						<ImageDisplayBlock imageSrc={image} imageAlt="Hero Image" />
					</div>
				</div>
			</div>
		</Container>
	);
};
