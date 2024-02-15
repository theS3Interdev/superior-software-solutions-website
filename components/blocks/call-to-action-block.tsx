import Link from "next/link";

import {
	Button,
	ContentDisplayBlock,
	ImageDisplayBlock,
} from "@/components/index";

type CallToActionBlockProps = {
	image: string;
	title: string;
	content: string;
	label: string;
	url: string;
};

export const CallToActionBlock = ({
	image,
	title,
	content,
	label,
	url,
}: CallToActionBlockProps) => {
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

				<div className="max-w-xl px-5 py-12 lg:w-1/2 lg:max-w-5xl">
					<h3 className="mb-5 text-2xl font-semibold tracking-wide">{title}</h3>

					<ContentDisplayBlock content={content} />

					<div className="mt-5 inline-flex w-full sm:w-auto">
						<Button asChild className="uppercase">
							<Link href={url}>{label}</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
