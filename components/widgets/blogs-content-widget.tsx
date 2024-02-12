import { Container } from "@/components/container";
import {
	BlogSummaryCardBlock,
	CallToActionBlock,
	HeaderDisplayBlock,
	PaginationButtonsBlock,
	SearchBoxBlock,
	Separator,
} from "@/components/index";
import {
	getAllBlogSummaryCount,
	getAllBlogSummary,
} from "@/lib/data/read/index";

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
	searchParams: { [key: string]: string | string[] | undefined };
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
	searchParams,
}: BlogsContentWidgetProps) => {
	const page =
		typeof searchParams.page === "string" ? Number(searchParams.page) : 1;

	const limit =
		typeof searchParams.limit === "string" ? Number(searchParams.limit) : 4;

	const search =
		typeof searchParams.search === "string" ? searchParams.search : "";

	const summary: BlogProps = await getAllBlogSummary(page, limit, search);

	const total = await getAllBlogSummaryCount();

	const totalPages = summary ? Math.ceil(total.length / limit) : 0;

	const pathSegment = "blogs";

	return (
		<Container>
			<div className="py-8">
				<div className="space-y-8">
					<HeaderDisplayBlock
						title={pasBlock.header.content.header.title}
						subtitle={pasBlock.header.content.header.subtitle}
					/>

					<div>
						<div className="mb-8 flex items-center space-x-3 lg:justify-end">
							<SearchBoxBlock pathSegment={pathSegment} search={search} />

							<PaginationButtonsBlock
								page={page}
								pathSegment={pathSegment}
								search={search}
								totalPages={totalPages}
							/>
						</div>

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
