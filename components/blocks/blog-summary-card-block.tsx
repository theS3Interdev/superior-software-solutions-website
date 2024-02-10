import Link from "next/link";

import { DateDisplayBlock, ImageDisplayBlock } from "@/components/index";

type BlogSummaryCardBlockProps = {
	image: string;
	title: string;
	slug: string;
	excerpt: string;
	date: string;
};

export const BlogSummaryCardBlock = ({
	image,
	title,
	slug,
	excerpt,
	date,
}: BlogSummaryCardBlockProps) => {
	return (
		<div className="">
			<div className="relative z-10 h-96 w-full">
				<ImageDisplayBlock imageSrc={image} imageAlt={title} />
			</div>

			<div className="relative z-20 mx-auto -mt-20 max-w-lg rounded-lg border bg-secondary p-5 shadow">
				<Link href={`/blogs/${slug}`}>
					<span className="text-balance font-semibold hover:cursor-pointer hover:text-primary hover:underline md:text-lg">
						{title}
					</span>
				</Link>

				<p className="mt-3 line-clamp-5 text-sm md:line-clamp-3">{excerpt}</p>

				<p className="mt-3 text-sm text-blue-500">
					<DateDisplayBlock date={date} />
				</p>
			</div>
		</div>
	);
};
