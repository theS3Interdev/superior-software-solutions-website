import {
	AccordionBlock,
	ContentDisplayBlock,
	ImageDisplayBlock,
	Separator,
} from "@/components/index";

type SolutionsPriceListBlockProps = {
	image: string;
	title: string;
	description: string;
	priceDetails: {
		list: {
			header: {
				title: string;
			};
			content: {
				html: string;
			};
		}[];
	};
};

export const SolutionsPriceListBlock = ({
	image,
	title,
	description,
	priceDetails,
}: SolutionsPriceListBlockProps) => {
	return (
		<div className="overflow-hidden rounded-lg border bg-secondary">
			<div className="relative h-64 w-full rounded lg:h-96">
				<ImageDisplayBlock imageSrc={image} imageAlt={title} />
			</div>

			<div className="p-5">
				<div className="space-y-3">
					<p className="text-lg font-semibold tracking-wide">{title}</p>

					<Separator className="my-3 dark:bg-gray-500" />

					<div>
						<ContentDisplayBlock content={description} />
					</div>

					<div>
						{priceDetails.list.map((item, index) => (
							<AccordionBlock
								key={index}
								title={item.header.title}
								content={item.content.html}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
