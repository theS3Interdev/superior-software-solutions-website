"use client";

import { CldImage } from "next-cloudinary";

type NCImageDisplayBlockProps = {
	imageSrc: string;
	imageAlt: string;
};

export const NCImageDisplayBlock = ({
	imageSrc,
	imageAlt,
}: NCImageDisplayBlockProps) => {
	return (
		<CldImage
			src={imageSrc}
			alt={imageAlt}
			fill
			crop="fill"
			gravity="auto"
			sizes="100vw"
			className="absolute h-auto w-full rounded-lg object-cover"
		/>
	);
};
