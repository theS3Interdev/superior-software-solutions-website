type ContentDisplayBlockProps = {
	content: string;
};

export const ContentDisplayBlock = ({ content }: ContentDisplayBlockProps) => {
	const markup = { __html: content };

	return (
		<div
			dangerouslySetInnerHTML={markup}
			className="prose max-w-none dark:prose-invert prose-headings:font-semibold prose-h3:text-lg prose-a:text-blue-500 hover:prose-a:text-sky-500"
		/>
	);
};
