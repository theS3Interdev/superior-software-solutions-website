import { Container } from "@/components/container";
import {
	BlogSummaryCardBlock,
	CallToActionBlock,
	HeaderDisplayBlock,
	Separator,
} from "@/components/index";
import { getAllBlogSummary } from "@/lib/data/read/index";

type BlogsContentWidgetProps = {
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

type BlogProps = {
	image: { public_id: string };
	title: string;
	slug: string;
	date: string;
	excerpt: string;
}[];

export const BlogsContentWidget = async ({
	pasBlock,
	callToAction,
}: BlogsContentWidgetProps) => {
	const summary: BlogProps = await getAllBlogSummary();

	return (
		<Container>
			<div className="py-8">
				<div className="space-y-8">
					<HeaderDisplayBlock
						title={pasBlock.header.content.header.title}
						subtitle={pasBlock.header.content.header.subtitle}
					/>

					<div>
						{summary.length === 0 ? (
							<p className="my-8 text-center leading-loose text-muted-foreground">
								There are currently no blogs...
							</p>
						) : (
							<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
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
