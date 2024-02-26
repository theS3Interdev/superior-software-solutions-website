import Link from "next/link";

import {
	Button,
	ContentDisplayBlock,
	ImageDisplayBlock,
	Separator,
} from "@/components/index";

type HomeBenefitCardBlockProps = {
	image: string;
	title: string;
	content: string;
	subtitle: string;
};

export const HomeBenefitCardBlock = ({
	image,
	title,
	subtitle,
	content,
}: HomeBenefitCardBlockProps) => {
	return (
		<div className="overflow-hidden rounded-lg border bg-secondary dark:border-gray-500">
			<div className="relative h-64 w-full rounded lg:h-96">
				<ImageDisplayBlock imageSrc={image} imageAlt={title} />
			</div>

			<div className="p-5">
				<div className="space-y-3">
					<p className="text-lg font-semibold tracking-wide">{title}</p>

					<Separator className="my-3 dark:bg-gray-500" />

					<div>
						<ContentDisplayBlock content={content} />
					</div>

					<div>
						<Button asChild className="w-full font-semibold uppercase">
							<Link href={subtitle}>Click to Continue</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
