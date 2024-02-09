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
		<div className="overflow-hidden bg-secondary dark:bg-transparent lg:mx-8 lg:flex lg:w-full lg:max-w-6xl lg:rounded-lg lg:shadow-md">
			<div className="lg:w-1/2">
				<div className="relative h-64 bg-cover lg:h-full">
					<ImageDisplayBlock imageSrc={image} imageAlt="Call to Action Image" />
				</div>
			</div>

			<div className="max-w-xl space-y-4 px-6 py-12 lg:w-1/2 lg:max-w-5xl">
				<h2 className="text-2xl font-semibold tracking-wide">{title}</h2>

				<ContentDisplayBlock content={content} />

				<div className="mt-6 inline-flex w-full sm:w-auto">
					<Button asChild className="uppercase">
						<Link href={url}>{label}</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};
