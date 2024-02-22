import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	ContentDisplayBlock,
} from "@/components/index";

type AccordionBlockProps = {
	title: string;
	content: string;
};

export const AccordionBlock = ({ title, content }: AccordionBlockProps) => {
	return (
		<Accordion type="single" collapsible className="w-full pt-3">
			<AccordionItem value={title}>
				<AccordionTrigger className="text-left">{title}</AccordionTrigger>
				<AccordionContent>
					<ContentDisplayBlock content={content} />
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};
