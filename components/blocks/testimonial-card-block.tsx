import {
	ContentDisplayBlock,
	ImageDisplayBlock,
	RatingBlock,
	Separator,
} from "@/components/index";

type TestimonialCardBlockProps = {
	image: string;
	name: string;
	title: string;
	rating: number;
	content: string;
};

export const TestimonialCardBlock = ({
	image,
	name,
	title,
	rating,
	content,
}: TestimonialCardBlockProps) => {
	return (
		<div className="overflow-hidden rounded-lg border bg-secondary dark:bg-transparent">
			<div className="p-5">
				<div className="space-y-3">
					<RatingBlock rating={rating} />

					<ContentDisplayBlock content={content} />
				</div>

				<Separator className="my-5" />

				<div className="flex items-center">
					<div className="relative h-10 w-10 rounded-full">
						<ImageDisplayBlock imageSrc={image} imageAlt={name} />
					</div>

					<div className="ml-3">
						<p className="text-lg font-semibold">{name}</p>
						<p className="text-xs text-muted-foreground">{title}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
