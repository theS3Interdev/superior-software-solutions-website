import {
	ContentDisplayBlock,
	ImageDisplayBlock,
	Separator,
} from "@/components/index";

type HomeProcessCardBlockProps = {
	image: string;
	title: string;
	content: string;
};

export const HomeProcessCardBlock = ({
	image,
	title,
	content,
}: HomeProcessCardBlockProps) => {
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
				</div>
			</div>
		</div>
	);
};
