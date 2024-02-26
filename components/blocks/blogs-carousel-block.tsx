"use client";

import { useEffect, useState } from "react";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
	BlogSummaryCardBlock,
} from "@/components/index";

type BlogsCarouselBlockProps = {
	summary: {
		title: string;
		slug: string;
		date: string;
		image: { public_id: string };
		excerpt: string;
	}[];
};

export const BlogsCarouselBlock = ({ summary }: BlogsCarouselBlockProps) => {
	const [api, setApi] = useState<CarouselApi>();

	const [current, setCurrent] = useState(0);

	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);

		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	return (
		<div>
			<Carousel setApi={setApi} className="w-full">
				<CarouselContent className="-ml-1">
					{summary.map((blog, index) => (
						<CarouselItem key={index} className="basis-full pl-3 lg:basis-1/2">
							<div className="p-1">
								<BlogSummaryCardBlock
									key={blog.slug}
									image={blog.image.public_id}
									excerpt={blog.excerpt}
									slug={blog.slug}
									title={blog.title}
									date={blog.date}
								/>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>

			<div className="block py-3 text-center text-sm text-muted-foreground lg:hidden">
				Project {current} of {count}
			</div>
		</div>
	);
};
