"use client";

import { CldImage } from "next-cloudinary";

type ImageDisplayBlockProps = {
	imageSrc: string;
	imageAlt: string;
};

export const ImageDisplayBlock = ({
	imageSrc,
	imageAlt,
}: ImageDisplayBlockProps) => {
	return (
		<CldImage
			src={imageSrc}
			alt={imageAlt}
			fill
			crop="fill"
			gravity="auto"
			quality={100}
			sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
			className="absolute h-auto w-full rounded-lg object-cover"
		/>
	);
};
