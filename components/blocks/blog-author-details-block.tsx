import { ContentDisplayBlock, ImageDisplayBlock } from "@/components/index";

type BlogAuthorDetailsBlockProps = {
	authorImage: string;
	authorName: string;
	authorBio: string;
};

export const BlogAuthorDetailsBlock = ({
	authorImage,
	authorName,
	authorBio,
}: BlogAuthorDetailsBlockProps) => {
	return (
		<div>
			<div className="mt-10 w-full rounded-lg border-2 bg-secondary px-3 py-5">
				<div className="-mt-10 flex justify-center md:justify-end">
					<div className="align-right relative h-12 w-12 rounded-lg">
						<ImageDisplayBlock imageSrc={authorImage} imageAlt={authorName} />
					</div>
				</div>

				<p className="my-2 text-xl font-semibold md:mt-0">{authorName}</p>

				<ContentDisplayBlock content={authorBio} />
			</div>
		</div>
	);
};
