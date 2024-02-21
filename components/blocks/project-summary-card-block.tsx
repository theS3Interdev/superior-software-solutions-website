import Link from "next/link";

import { Badge, ImageDisplayBlock } from "@/components/index";

type ProjectSummaryCardBlockProps = {
	image: string;
	title: string;
	slug: string;
	excerpt: string;
	solutions: { title: string }[];
};

export const ProjectSummaryCardBlock = ({
	image,
	title,
	slug,
	excerpt,
	solutions,
}: ProjectSummaryCardBlockProps) => {
	return (
		<div>
			<div className="relative z-10 h-96 w-full">
				<ImageDisplayBlock imageSrc={image} imageAlt={title} />
			</div>

			<div className="relative z-20 mx-auto -mt-20 max-w-lg rounded-lg border bg-secondary p-5 shadow">
				<Link href={`/projects/${slug}`}>
					<span className="text-balance font-semibold hover:cursor-pointer hover:text-primary hover:underline md:text-lg">
						{title}
					</span>
				</Link>

				<p className="my-3 line-clamp-5 text-sm tracking-wide md:line-clamp-3">
					{excerpt}
				</p>

				<div>
					{solutions &&
						solutions.map((solution, index) =>
							index === 0 ? (
								<Badge key={index} className="mx-[1px] text-xs">
									{solution.title}
								</Badge>
							) : (
								solution.title && (
									<Badge key={index} className="mx-[1px] text-xs">
										{solution.title}
									</Badge>
								)
							),
						)}
				</div>
			</div>
		</div>
	);
};
