import Link from "next/link";

import { Container } from "@/components/container";
import {
	Button,
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

					<Separator className="my-8" />

					<div className="flex flex-col lg:flex-row">
						<div className="lg:w-3/4"></div>

						<div className="mt-5 space-y-3 lg:mt-0 lg:w-1/4 lg:px-3">
							<div className="mx-auto max-w-full rounded-lg border bg-secondary p-3">
								<div>
									<h3 className="mb-3 text-lg font-semibold tracking-wide">
										Basic Turnaround
									</h3>

									<Separator className="my-3" />

									<div className="flex flex-col space-y-3">
										<div className="text-pretty text-sm leading-loose">
											<p className="font-semibold">Description</p>
											<p>
												This covers basic edits to text, images, adding new
												sections. If your request is to make forklift changes to
												custom app, or a new domain to your email account,
												please{" "}
												<Link
													href="https://calendly.com/superior-software-solutions"
													target="_blank"
													className="text-blue-500 hover:underline"
												>
													schedule an appointment
												</Link>{" "}
												to discuss.
											</p>
										</div>

										<div className="text-pretty text-sm leading-loose">
											<p className="font-semibold">Duration</p>
											<p>4-10 business days</p>
											<p className="text-xs">
												This depends on request complexity.
											</p>
										</div>

										<div className="text-pretty text-sm leading-loose">
											<p className="font-semibold">Cost</p>
											<p>$65/hour</p>
											<p className="text-xs">Free if on a maintenance plan.</p>
										</div>
									</div>
								</div>
							</div>

							<div className="mx-auto max-w-full rounded-lg border bg-secondary p-3">
								<div>
									<h3 className="mb-3 text-lg font-semibold tracking-wide">
										Rapid Turnaround
									</h3>

									<Separator className="my-3" />

									<div className="flex flex-col space-y-3">
										<div className="text-pretty text-sm leading-loose">
											<p className="font-semibold">Duration</p>
											<p>1-3 business days</p>
											<p className="text-xs">
												This depends on request complexity.
											</p>
										</div>

										<div className="text-pretty text-sm leading-loose">
											<p className="font-semibold">Cost</p>
											<p>$99/hour</p>
											<p className="text-xs">
												$29/hour if on a maintenance plan.
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="mx-auto max-w-full rounded-lg border bg-secondary p-3">
								<div>
									<h3 className="mb-3 text-lg font-semibold tracking-wide">
										Emergency Fixes
									</h3>

									<Separator className="my-3" />

									<div className="flex flex-col space-y-3">
										<div className="text-pretty text-sm leading-loose">
											<p className="font-semibold">Description</p>
											<p>
												Any software issue that is hindering business continuity
												(e.g. website down, e-mails are not working or custom
												webapp cannot be accessed)
											</p>
										</div>

										<div className="text-pretty text-sm leading-loose">
											<p className="font-semibold">Cost</p>
											<p>Depends on the source of the issue</p>
											<p>
												<span className="font-semibold">Plugin issue:</span>{" "}
												$65/hour
											</p>
											<p>
												<span className="font-semibold">Client error:</span>{" "}
												$65/hour
											</p>
											<p>
												<span className="font-semibold">
													Bug from developer error:
												</span>{" "}
												Free
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="mx-auto max-w-full rounded-lg border bg-secondary p-3">
								<div>
									<h3 className="mb-3 text-lg font-semibold tracking-wide">
										Speed Dial
									</h3>

									<Separator className="my-3" />

									<p className="text-pretty text-sm leading-loose">
										While we are based in Nairobi, Kenya, we meet most of our
										clients virtually from any location.
									</p>

									<Button asChild className="mt-3 w-full">
										<Link
											href="https://calendly.com/superior-software-solutions"
											target="_blank"
											className="text-lg font-semibold uppercase"
										>
											Schedule an Appointment
										</Link>
									</Button>
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
