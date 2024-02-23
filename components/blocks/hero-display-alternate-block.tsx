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
			<div
				className="left-0 top-0 flex h-[32rem] w-full items-center justify-center rounded-lg bg-cover bg-center"
				style={{ backgroundImage: `url(${image})` }}
			>
				<div className="flex h-full w-full items-center justify-center rounded-lg bg-black/40">
					<div className="w-full md:pl-8 lg:w-1/2">
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
								<h1 className="text-pretty text-3xl font-semibold tracking-wide text-white lg:text-4xl">
									{title}
								</h1>

								{subtitleHT && subtitleHS && (
									<div className="mt-3 w-full">
										<Separator className="my-3" />

										<p className="text-pretty text-xl leading-loose text-white">
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

								<div className="flex flex-col text-muted-foreground text-white">
									<p className="text-sm">{authorName}</p>

									<p className="text-xs">
										<DateDisplayBlock date={date} />
									</p>
								</div>
							</div>
						)}
					</div>

					<div className="flex h-96 w-full items-center justify-center lg:w-1/2"></div>
				</div>
			</div>
		</Container>
	);
};
