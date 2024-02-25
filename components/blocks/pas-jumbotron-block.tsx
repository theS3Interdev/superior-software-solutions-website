import {
	ContentDisplayBlock,
	HeaderDisplayBlock,
	ImageDisplayBlock,
	Separator,
} from "@/components/index";

type PASJumbotronBlockProps = {
	title?: string;
	subtitle?: string;
	displayTitle: boolean;
	image: string;
	content: string;
	pasBlock: {
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
};

export const PASJumbotronBlock = ({
	title,
	subtitle,
	displayTitle,
	image,
	content,
	pasBlock,
}: PASJumbotronBlockProps) => {
	return (
		<div className="w-full space-y-5 rounded-lg border bg-secondary p-4">
			<div>
				{displayTitle ? (
					<HeaderDisplayBlock
						title="Bridging Success"
						subtitle="The Superior Software Solutions story"
					/>
				) : (
					<HeaderDisplayBlock title={title} subtitle={subtitle} />
				)}
			</div>

			<div className="flex flex-col gap-5 rounded-lg lg:flex-row">
				<div className="px-1 lg:w-1/2">
					<div className="relative h-64 w-full lg:h-72">
						<ImageDisplayBlock imageSrc={image} imageAlt="About Image" />
					</div>
				</div>

				<div className="space-y-5 px-1 lg:w-1/2">
					<div>
						{displayTitle ? (
							<HeaderDisplayBlock
								title="Michael Caesar"
								subtitle="Founder @Superior Software Solutions."
							/>
						) : (
							<HeaderDisplayBlock
								title="Unmute Your Story"
								subtitle="Crafting a digital experience that resonates."
							/>
						)}
					</div>

					<div>
						<ContentDisplayBlock content={content} />
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
				{pasBlock.list.map((item, index) => (
					<div
						key={index}
						className="overflow-hidden rounded-lg border bg-secondary"
					>
						<div className="p-5">
							<h3 className="text-lg font-semibold tracking-wide">
								{item.content.header.title}
							</h3>

							<Separator className="my-3 dark:bg-muted-foreground" />

							<ContentDisplayBlock content={item.content.content.html} />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
