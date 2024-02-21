import { getAllSolutionSummary } from "@/lib/data/read/index";

import { Container } from "@/components/container";
import {
	CallToActionBlock,
	Separator,
	SolutionsSummaryCardBlock,
} from "@/components/index";

type SolutionsContentWidgetProps = {
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

type SolutionProps = {
	slug: string;
	heroActionBlock: {
		content: {
			content: {
				header: {
					title: string;
					subtitle: string;
				};
			};
			image: { public_id: string };
		};
	};
}[];

export const SolutionsContentWidget = async ({
	callToAction,
}: SolutionsContentWidgetProps) => {
	const summary: SolutionProps = await getAllSolutionSummary();

	return (
		<Container>
			<div className="py-8">
				<div className="space-y-8">
					<div>
						{summary.length === 0 ? (
							<p className="my-8 text-center leading-loose text-muted-foreground">
								There are currently no solutions...
							</p>
						) : (
							<div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
								{summary.map((solution, index) => (
									<SolutionsSummaryCardBlock
										key={index}
										image={solution.heroActionBlock.content.image.public_id}
										slug={solution.slug}
										subtitle={
											solution.heroActionBlock.content.content.header.subtitle
										}
										title={
											solution.heroActionBlock.content.content.header.title
										}
									/>
								))}
							</div>
						)}
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
