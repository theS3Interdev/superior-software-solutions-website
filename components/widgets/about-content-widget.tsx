import { Container } from "@/components/container";
import {
	CallToActionBlock,
	ContentDisplayBlock,
	HeaderDisplayBlock,
	ImageDisplayBlock,
	Separator,
} from "@/components/index";

type AboutContentWidgetProps = {
	pasBlock: {
		header: {
			content: {
				header: {
					title: string;
					subtitle: string;
				};
				content: {
					html: string;
				};
			};
			image: { public_id: string };
		};
		list: {
			content: {
				header: {
					title: string;
				};
				content: {
					html: string;
				};
			};
		}[];
	};
	callToAction: {
		image: { public_id: string };
		title: string;
		content: {
			html: string;
		};
		link: {
			label: string;
			url: string;
		};
	};
};

export const AboutContentWidget = ({
	pasBlock,
	callToAction,
}: AboutContentWidgetProps) => {
	return (
		<Container>
			<div className="py-8">
				<div className="space-y-8">
					<div className="w-full space-y-5 rounded-lg border bg-secondary p-5">
						<div>
							<HeaderDisplayBlock
								title="Bridging Success"
								subtitle="The Superior Software Solutions story"
							/>
						</div>

						<div className="flex flex-col gap-5 rounded-lg lg:flex-row">
							<div className="px-1 lg:w-1/2">
								<div className="relative h-64 w-full lg:h-72">
									<ImageDisplayBlock
										imageSrc={pasBlock.header.image.public_id}
										imageAlt="About Image"
									/>
								</div>
							</div>

							<div className="space-y-5 px-1 lg:w-1/2">
								<div>
									<HeaderDisplayBlock
										title="Michael Caesar"
										subtitle="Founder @Superior Software Solutions"
									/>
								</div>

								<div>
									<ContentDisplayBlock
										content={pasBlock.header.content.content.html}
									/>
								</div>
							</div>
						</div>

						<div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
							{pasBlock.list.map((item, index) => (
								<div
									key={index}
									className="overflow-hidden rounded-lg border-2 bg-secondary"
								>
									<div className="p-5">
										<h3 className="text-lg font-semibold tracking-wide">
											{item.content.header.title}
										</h3>

										<Separator className="my-3" />

										<ContentDisplayBlock content={item.content.content.html} />
									</div>
								</div>
							))}
						</div>
					</div>

					<Separator className="my-8" />

					<div>
						<CallToActionBlock
							image={callToAction.image.public_id}
							title={callToAction.title}
							content={callToAction.content.html}
							label={callToAction.link.label}
							url={callToAction.link.url}
						/>
					</div>
				</div>
			</div>
		</Container>
	);
};
