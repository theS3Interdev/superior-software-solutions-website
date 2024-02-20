import { Container } from "@/components/container";
import {
	BlogSummaryCardBlock,
	CallToActionBlock,
	HeaderDisplayBlock,
	Separator,
} from "@/components/index";

import { getAllBlogSummary } from "@/lib/data/read/index";

type BlogsContentWidgetProps = {
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

type BlogProps = {
	image: { public_id: string };
	title: string;
	slug: string;
	date: string;
	excerpt: string;
}[];

export const BlogsContentWidget = async ({
	callToAction,
}: BlogsContentWidgetProps) => {
	const summary: BlogProps = await getAllBlogSummary();

	return (
		<Container>
			<div className="py-8">
				<div className="space-y-8">
					<div>
						{summary.length === 0 ? (
							<p className="my-8 text-center leading-loose text-muted-foreground">
								There are currently no blogs...
							</p>
						) : (
							<div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
								{summary.map((blog, index) => (
									<BlogSummaryCardBlock
										key={index}
										image={blog.image.public_id}
										title={blog.title}
										slug={blog.slug}
										excerpt={blog.excerpt}
										date={blog.date}
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
