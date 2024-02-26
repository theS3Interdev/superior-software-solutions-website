import Link from "next/link";

import { ImageDisplayBlock } from "@/components/index";

type SolutionsSummaryCardBlockProps = {
	image: string;
	slug: string;
	subtitle: string;
	title: string;
};

export const SolutionsSummaryCardBlock = ({
	image,
	slug,
	subtitle,
	title,
}: SolutionsSummaryCardBlockProps) => {
	return (
		<div>
			<div className="relative z-10 aspect-auto h-96 w-full">
				<ImageDisplayBlock imageSrc={image} imageAlt={title} />
			</div>

			<div className="relative z-20 mx-auto -mt-20 max-w-lg rounded-lg border bg-secondary p-5 shadow">
				<Link href={`/solutions/${slug}`}>
					<span className="text-balance font-semibold hover:cursor-pointer hover:text-primary hover:underline md:text-lg">
						{title}
					</span>
				</Link>

				<p className="my-3 line-clamp-5 text-sm tracking-wide md:line-clamp-3">
					{subtitle}
				</p>
			</div>
		</div>
	);
};
