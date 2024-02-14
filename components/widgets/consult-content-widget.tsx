import Link from "next/link";

import { getGlobals } from "@/lib/data/read/index";

import { Container } from "@/components/container";
import {
	Button,
	CallToActionBlock,
	ConsultationFormBlock,
	HeaderDisplayBlock,
	Separator,
} from "@/components/index";

type ConsultContentWidgetProps = {
	pasBlock: {
		header: {
			content: {
				header: { title: string; subtitle: string };
				content: { html: string };
			};
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

type GlobalsProps = {
	siteContactDetails: {
		list: {
			header: {
				title: string;
				subtitle: string;
			};
		}[];
	};
};

export const ConsultContentWidget = async ({
	pasBlock,
	callToAction,
}: ConsultContentWidgetProps) => {
	const { siteContactDetails }: GlobalsProps = await getGlobals();

	return (
		<Container>
			<div className="py-8">
				<div className="space-y-8">
					<HeaderDisplayBlock
						title={pasBlock.header.content.header.title}
						subtitle={pasBlock.header.content.header.subtitle}
					/>

					<div className="flex flex-col lg:flex-row">
						<div className="lg:w-3/4">
							<div className="mx-auto max-w-full rounded-lg border bg-secondary p-3">
								<div className="space-y-5">
									<HeaderDisplayBlock
										title="Book a Free Consultation"
										subtitle="We are here to help you and we shall get back to you within 24
										hours of the receipt of your request."
									/>

									<ConsultationFormBlock />
								</div>
							</div>
						</div>

						<div className="mt-5 space-y-3 lg:mt-0 lg:w-1/4 lg:px-3">
							<div className="mx-auto max-w-full rounded-lg border bg-secondary p-3">
								<div>
									<h3 className="mb-3 text-lg font-semibold tracking-wide">
										Contact Information
									</h3>

									<Separator className="my-3 " />

									{siteContactDetails.list.map((contactDetail, index) => {
										return (
											<div className="mb-2" key={index}>
												<p className="font-semibold tracking-wide">
													{contactDetail.header.title}
												</p>

												<p className="text-pretty text-sm leading-loose">
													{contactDetail.header.subtitle}
												</p>
											</div>
										);
									})}
								</div>
							</div>

							<div className="mx-auto max-w-full rounded-lg border bg-secondary p-3">
								<div className="flex flex-col space-y-2">
									<p className="text-pretty text-sm leading-loose">
										While we are based in Nairobi, Kenya, we meet most of our
										clients virtually from any location.
									</p>

									<Button asChild>
										<Link
											href="/solutions/online-success-packages"
											className="text-lg font-semibold uppercase"
										>
											Success Packages
										</Link>
									</Button>

									<Button asChild>
										<Link
											href="/solutions/email-hosting"
											className="text-lg font-semibold uppercase"
										>
											Email Hosting
										</Link>
									</Button>

									<Button asChild>
										<Link
											href="/solutions/website-development"
											className="text-lg font-semibold uppercase"
										>
											Website Development
										</Link>
									</Button>

									<Button asChild>
										<Link
											href="/solutions/custom-webapp-development"
											className="text-lg font-semibold uppercase"
										>
											Custom Webapp Development
										</Link>
									</Button>

									<Button asChild>
										<Link
											href="/support"
											className="text-lg font-semibold uppercase"
										>
											Support
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
