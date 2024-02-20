import { Container } from "@/components/container";
import { ImageDisplayBlock, Separator } from "@/components/index";

type HeroDisplayAlternateBlockProps = {
	image: string;
	title: string;
	subtitleHT: string;
	subtitleHS: string;
};

export const HeroDisplayAlternateBlock = ({
	image,
	title,
	subtitleHT,
	subtitleHS,
}: HeroDisplayAlternateBlockProps) => {
	return (
		<Container>
			<div className="flex flex-col space-y-5 py-10 lg:h-[32rem] lg:flex-row lg:items-center lg:py-16">
				<div className="w-full lg:w-1/2">
					<div className="lg:max-w-lg">
						<h1 className="text-pretty text-3xl font-semibold tracking-wide lg:text-4xl">
							{title}
						</h1>

						<div className="mt-5 w-full">
							<Separator className="my-3" />

							<p className="text-pretty text-xl leading-loose text-muted-foreground">
								<span>{subtitleHT}</span>: <span>{subtitleHS}</span>
							</p>

							<Separator className="my-3" />
						</div>
					</div>
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
