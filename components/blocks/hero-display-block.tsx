import { Container } from "@/components/container";
import {
	Badge,
	DateDisplayBlock,
	HeaderDisplayBlock,
	ImageDisplayBlock,
	Separator,
} from "@/components/index";

type HeroDisplayBlockProps = {
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

export const HeroDisplayBlock = ({
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
}: HeroDisplayBlockProps) => {
	return (
		<Container>
			<div
				className="left-0 top-0 flex h-[32rem] w-full items-center justify-center rounded-lg bg-cover bg-center"
				style={{ backgroundImage: `url(${image})` }}
			>
				<div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-gray-900/40 lg:flex-row">
					<div className="px-3 lg:w-1/2">
						{category && (
							<div className="mb-3">
								<Badge className="m-[1px] text-sm text-white">{category}</Badge>
							</div>
						)}

						{solutions &&
							solutions.map((service, index) =>
								index === 0 ? (
									<Badge
										key={index}
										className="m-[1px] mb-3 text-sm text-white"
									>
										{service.title}
									</Badge>
								) : (
									service.title && (
										<Badge
											key={index}
											className="m-[1px] mb-3 text-sm text-white"
										>
											{service.title}
										</Badge>
									)
								),
							)}

						{title && (
							<div>
								<h1 className="text-pretty text-3xl font-semibold tracking-wide text-white lg:text-4xl">
									{title}
								</h1>

								{subtitleHT && subtitleHS && (
									<div className="mt-3 w-full">
										<Separator className="my-3 bg-white" />

										<p className="text-pretty text-xl leading-loose text-white">
											<span>{subtitleHT}</span>: <span>{subtitleHS}</span>
										</p>

										<Separator className="my-3 bg-white" />
									</div>
								)}

								{excerpt && (
									<div className="my-3 w-full text-white">
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

								<div className="flex flex-col text-white">
									<p className="text-sm">{authorName}</p>

									<p className="text-xs">
										<DateDisplayBlock date={date} />
									</p>
								</div>
							</div>
						)}
					</div>

					<div className="px-3 text-white lg:w-1/2"></div>
				</div>
			</div>
		</Container>
	);
};
