"use client";

import { useEffect, useState } from "react";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
	ProjectSummaryCardBlock,
} from "@/components/index";

type ProjectsCarouselBlockProps = {
	projects: {
		title: string;
		slug: string;
		image: { public_id: string };
		excerpt: string;
	}[];
};

export const ProjectsCarouselBlock = ({
	projects,
}: ProjectsCarouselBlockProps) => {
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
					{projects.map((project, index) => (
						<CarouselItem key={index} className="basis-full pl-3 lg:basis-1/2">
							<div className="p-1">
								<ProjectSummaryCardBlock
									key={project.slug}
									image={project.image.public_id}
									excerpt={project.excerpt}
									slug={project.slug}
									title={project.title}
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
