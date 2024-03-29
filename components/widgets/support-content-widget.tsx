import Link from "next/link";

import { Container } from "@/components/container";
import {
	Button,
	CallToActionBlock,
	HeaderDisplayBlock,
	PASHeaderBlock,
	Separator,
	SupportFormBlock,
} from "@/components/index";

type SupportContentWidgetProps = {
	pasBlock: {
		header: {
			content: {
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
					<div>
						<PASHeaderBlock
							image={pasBlock.header.image.public_id}
							title="Support Charter"
							content={pasBlock.header.content.content.html}
						/>
					</div>

					<div className="flex flex-col lg:flex-row">
						<div className="lg:w-3/4">
							<div className="mx-auto max-w-full rounded-lg border bg-secondary p-3">
								<div className="space-y-5">
									<div>
										<HeaderDisplayBlock
											title="Support Request"
											subtitle="Complete the form and we shall add it to our schedule, once the support request is complete, you will be notified via email."
										/>
									</div>

									<div>
										<SupportFormBlock />
									</div>
								</div>
							</div>

							<div className="mt-3">
								<div className="mx-auto max-w-full rounded-lg border bg-secondary p-3">
									<div>
										<h3 className="mb-3 text-lg font-semibold tracking-wide">
											No Hourly Billing
										</h3>

										<Separator className="my-3" />

										<p className="text-pretty leading-loose">
											You will notice that we don’t provide an hourly billing
											cost. This is harmful to you in the sense that it
											discourages efficiency and creativity from our part and in
											the end, we are both focused on the outcome and not
											inefficient hours worked.
										</p>

										<p className="mt-3 text-pretty leading-loose">
											The prices we provide are fixed, which means there are no
											hidden fees and we absorb all the risk in completing the
											project within these boundaries.
										</p>
									</div>
								</div>
							</div>
						</div>

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
													href="https://tidycal.com/superior-software-solutions/15-minute-discovery-call"
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
											<p>This depends on request complexity.</p>
										</div>

										<div className="text-pretty text-sm leading-loose">
											<p className="font-semibold">Cost</p>
											<p>
												<span className="font-semibold">
													Not on maintenance plan:
												</span>{" "}
												$200
											</p>
											<p>
												<span className="font-semibold">
													On maintenance plan:
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
										Rapid Turnaround
									</h3>

									<Separator className="my-3" />

									<div className="flex flex-col space-y-3">
										<div className="text-pretty text-sm leading-loose">
											<p className="font-semibold">Duration</p>
											<p>1-3 business days</p>
											<p>This depends on request complexity.</p>
										</div>

										<div className="text-pretty text-sm leading-loose">
											<p className="font-semibold">Cost</p>
											<p>
												<span className="font-semibold">
													Not on maintenance plan:
												</span>{" "}
												$300
											</p>
											<p>
												<span className="font-semibold">
													On maintenance plan:
												</span>{" "}
												$100
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
												&#40;e.g. website down, e-mails are not working or
												custom webapp cannot be accessed.&#41;
											</p>
										</div>

										<div className="text-pretty text-sm leading-loose">
											<p className="font-semibold">Cost</p>
											<p>Depends on the source of the issue</p>
											<p>
												<span className="font-semibold">Client error:</span>{" "}
												$200
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
											href="https://tidycal.com/superior-software-solutions/15-minute-discovery-call"
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
