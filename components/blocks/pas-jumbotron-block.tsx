import {
	ContentDisplayBlock,
	HeaderDisplayBlock,
	ImageDisplayBlock,
	Separator,
} from "@/components/index";

type PASJumbotronBlockProps = {
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
	image,
	content,
	pasBlock,
}: PASJumbotronBlockProps) => {
	return (
		<div className="w-full space-y-5 rounded-lg border bg-secondary p-4">
			<div>
				<HeaderDisplayBlock
					title="Bridging Success"
					subtitle="The Superior Software Solutions story"
				/>
			</div>

			<div className="flex flex-col gap-5 rounded-lg lg:flex-row">
				<div className="px-1 lg:w-1/2">
					<div className="relative h-64 w-full lg:h-72">
						<ImageDisplayBlock imageSrc={image} imageAlt="About Image" />
					</div>
				</div>

				<div className="space-y-5 px-1 lg:w-1/2">
					<div>
						<HeaderDisplayBlock
							title="Michael Caesar"
							subtitle="Founder @Superior Software Solutions"
						/>
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

							<Separator className="my-3" />

							<ContentDisplayBlock content={item.content.content.html} />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
