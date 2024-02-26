import Link from "next/link";

import { Container } from "@/components/container";
import {
	Button,
	CallToActionBlock,
	ContentDisplayBlock,
	HeaderDisplayBlock,
	ImageDisplayBlock,
	PASJumbotronBlock,
	Separator,
} from "@/components/index";

type HomeContentWidgetProps = {
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
	benefitsBlock: {
		header: {
			content: {
				header: {
					title: string;
					subtitle: string;
				};
			};
		};
		list: {
			content: {
				header: {
					title: string;
					subtitle: string;
				};
				content: { html: string };
			};
			image: { public_id: string };
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

export const HomeContentWidget = ({
	pasBlock,
	benefitsBlock,
	callToAction,
}: HomeContentWidgetProps) => {
	return (
		<>
			<Container>
				<div className="py-8">
					<div className="space-y-8">
						<div>
							<PASJumbotronBlock
								image={pasBlock.header.image.public_id}
								content={pasBlock.header.content.content.html}
								pasBlock={pasBlock}
								displayTitle={false}
								title={pasBlock.header.content.header.title}
								subtitle={pasBlock.header.content.header.subtitle}
							/>
						</div>
					</div>
				</div>
			</Container>

			<div className="bg-secondary py-8">
				<Container>
					<div className="space-y-8">
						<div>
							<HeaderDisplayBlock
								title={benefitsBlock.header.content.header.title}
								subtitle={benefitsBlock.header.content.header.subtitle}
							/>
						</div>

						<div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
							{benefitsBlock.list.map((benefit, index) => (
								<div
									key={index}
									className="overflow-hidden rounded-lg border bg-secondary dark:border-gray-500"
								>
									<div className="relative h-64 w-full rounded lg:h-96">
										<ImageDisplayBlock
											imageSrc={benefit.image.public_id}
											imageAlt={benefit.content.header.title}
										/>
									</div>

									<div className="p-5">
										<div className="space-y-3">
											<p className="text-lg font-semibold tracking-wide">
												{benefit.content.header.title}
											</p>

											<Separator className="my-3 dark:bg-gray-500" />

											<div>
												<ContentDisplayBlock
													content={benefit.content.content.html}
												/>
											</div>

											<div>
												<Button
													asChild
													className="w-full font-semibold uppercase"
												>
													<Link href={benefit.content.header.subtitle}>
														Click to Continue
													</Link>
												</Button>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</Container>
			</div>

			<Container>
				<div className="py-8">
					<div className="space-y-8">
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
		</>
	);
};
