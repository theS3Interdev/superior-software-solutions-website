import { Button, ImageDisplayBlock } from "@/components/index";
import Link from "next/link";

type HomeHeroWidgetProps = {
	heroActionBlock: {
		content: {
			content: { header: { title: string; subtitle: string } };
			image: { public_id: string };
		};
		links: {
			label: string;
			url: string;
		}[];
	};
};

export const HomeHeroWidget = ({ heroActionBlock }: HomeHeroWidgetProps) => {
	return (
		<div className="mx-1">
			<div className="relative">
				<div className="relative h-[75vh] w-full">
					<ImageDisplayBlock
						imageSrc={heroActionBlock.content.image.public_id}
						imageAlt={heroActionBlock.content.content.header.title}
					/>

					<div className="absolute left-0 top-0 h-[75vh] w-full rounded-lg bg-black/50"></div>

					<div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
						<div className="max-w-6xl md:flex md:gap-8">
							<div className="px-3 md:w-1/2">
								<h1 className="text-pretty text-3xl font-bold tracking-tight text-white">
									{heroActionBlock.content.content.header.title}
								</h1>

								<p className="mt-6 text-pretty text-lg leading-loose text-white">
									{heroActionBlock.content.content.header.subtitle}
								</p>

								<div className="mt-8">
									<Button asChild>
										<Link
											href={heroActionBlock.links[0].url}
											className="text-lg font-semibold uppercase"
										>
											{heroActionBlock.links[0].label}
										</Link>
									</Button>
								</div>
							</div>

							<div className="px-3 md:w-1/2"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
