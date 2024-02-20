import { HeroDisplayAlternateBlock } from "@/components/index";

type BlogHeroWidgetProps = {
	authorImage: string;
	authorName: string;
	category: string;
	date: string;
	excerpt: string;
	image: string;
	title: string;
};

export const BlogHeroWidget = ({
	authorImage,
	authorName,
	category,
	date,
	excerpt,
	image,
	title,
}: BlogHeroWidgetProps) => {
	return (
		<div className="mx-1">
			<HeroDisplayAlternateBlock
				authorImage={authorImage}
				authorName={authorName}
				category={category}
				date={date}
				excerpt={excerpt}
				image={image}
				title={title}
			/>
		</div>
	);
};
