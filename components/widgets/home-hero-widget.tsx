import Link from "next/link";

import { Button } from "@/components/index";

type HomeHeroWidgetProps = {
	heroActionBlock: {
		content: {
			content: {
				header: {
					title: string;
					subtitle: string;
				};
			};
			image: {
				public_id: string;
				secure_url: string;
			};
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
			<div
				className="left-0 top-0 flex h-[75vh] w-full items-center justify-center rounded-lg bg-cover bg-center"
				style={{
					backgroundImage: `url(${heroActionBlock.content.image.secure_url})`,
				}}
			>
				<div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-gray-900/40 lg:flex-row lg:gap-8">
					<div className="container mx-auto flex max-w-6xl">
						<div className="space-y-5 px-3 lg:w-1/2">
							<h1 className="text-pretty text-3xl font-semibold tracking-wide text-white lg:text-4xl">
								{heroActionBlock.content.content.header.title}
							</h1>

							<p className="text-pretty text-lg leading-loose text-white">
								{heroActionBlock.content.content.header.subtitle}
							</p>

							<div>
								{heroActionBlock.links.map((link, index) => (
									<Button asChild key={index}>
										<Link
											href={link.url}
											className="text-lg font-semibold uppercase"
										>
											{link.label}
										</Link>
									</Button>
								))}
							</div>
						</div>

						<div className="px-3 lg:w-1/2"></div>
					</div>
				</div>
			</div>
		</div>
	);
};
