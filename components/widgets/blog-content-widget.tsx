import { Container } from "@/components/container";

type BlogContentWidgetProps = {};

export const BlogContentWidget = ({}: BlogContentWidgetProps) => {
	return (
		<Container>
			<div className="py-8">
				<div className="space-y-8">Blog Content Widget</div>
			</div>
		</Container>
	);
};
