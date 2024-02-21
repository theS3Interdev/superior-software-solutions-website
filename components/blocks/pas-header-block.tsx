import {
	ContentDisplayBlock,
	HeaderDisplayBlock,
	ImageDisplayBlock,
} from "@/components/index";

type PASHeaderBlockProps = {
	image: string;
	title: string;
	subtitle?: string;
	content: string;
};

export const PASHeaderBlock = ({
	image,
	title,
	subtitle,
	content,
}: PASHeaderBlockProps) => {
	return (
		<div className="lg:flex lg:justify-center">
			<div className="overflow-hidden border bg-secondary lg:mx-3 lg:flex lg:w-full lg:max-w-7xl lg:rounded-lg lg:shadow-md">
				<div className="lg:w-1/2">
					<div className="relative h-64 bg-cover lg:h-full">
						<ImageDisplayBlock
							imageSrc={image}
							imageAlt="Call to Action Image"
						/>
					</div>
				</div>

				<div className="max-w-xl space-y-5 p-5 lg:w-1/2 lg:max-w-5xl">
					<div>
						<HeaderDisplayBlock title={title} subtitle={subtitle} />
					</div>

					<div>
						<ContentDisplayBlock content={content} />
					</div>
				</div>
			</div>
		</div>
	);
};
