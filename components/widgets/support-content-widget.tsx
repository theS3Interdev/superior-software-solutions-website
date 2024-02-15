import { Container } from "@/components/container";
import {
	CallToActionBlock,
	ContentDisplayBlock,
	HeaderDisplayBlock,
	ImageDisplayBlock,
	Separator,
} from "@/components/index";

type SupportContentWidgetProps = {
	pasBlock: {
		header: {
			content: {
				header: { title: string; subtitle: string };
				content: { html: string };
			};
			image: { public_id: string };
		};
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

export const SupportContentWidget = ({
	pasBlock,
	callToAction,
}: SupportContentWidgetProps) => {
	return (
		<Container>
			<div className="py-8">
				<div className="space-y-8">
					<HeaderDisplayBlock
						title={pasBlock.header.content.header.title}
						subtitle={pasBlock.header.content.header.subtitle}
					/>

					<div className="lg:flex lg:justify-center">
						<div className="overflow-hidden border bg-secondary lg:mx-3 lg:flex lg:w-full lg:max-w-7xl lg:rounded-lg lg:shadow-md">
							<div className="lg:w-1/2">
								<div className="relative h-64 bg-cover lg:h-full">
									<ImageDisplayBlock
										imageSrc={pasBlock.header.image.public_id}
										imageAlt="Call to Action Image"
									/>
								</div>
							</div>

							<div className="max-w-xl px-5 py-12 lg:w-1/2 lg:max-w-5xl">
								<h3 className="mb-5 text-2xl font-semibold tracking-wide">
									Support Charter
								</h3>

								<ContentDisplayBlock
									content={pasBlock.header.content.content.html}
								/>
							</div>
						</div>
					</div>

					<div className="flex flex-col lg:flex-row">
						<div className="lg:w-3/4"></div>

						<div className="mt-5 space-y-3 lg:mt-0 lg:w-1/4 lg:px-3">
							<div className="mx-auto max-w-full rounded-lg border bg-secondary p-3">
								<div>
									<h3 className="mb-3 text-lg font-semibold tracking-wide">
										Basic Turnaround
									</h3>

									<Separator className="my-3" />
								</div>
							</div>

							<div className="mx-auto max-w-full rounded-lg border bg-secondary p-3">
								<div>
									<h3 className="mb-3 text-lg font-semibold tracking-wide">
										Rapid Turnaround
									</h3>

									<Separator className="my-3" />
								</div>
							</div>

							<div className="mx-auto max-w-full rounded-lg border bg-secondary p-3">
								<div>
									<h3 className="mb-3 text-lg font-semibold tracking-wide">
										Emergency Fixes
									</h3>

									<Separator className="my-3" />
								</div>
							</div>
						</div>
					</div>

					<Separator className="my-8" />

					<CallToActionBlock
						image={callToAction.image.public_id}
						title={callToAction.title}
						content={callToAction.content.html}
						label={callToAction.link.label}
						url={callToAction.link.url}
					/>
				</div>
			</div>
		</Container>
	);
};
