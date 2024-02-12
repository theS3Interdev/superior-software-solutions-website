import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/index";

type PaginationButtonsBlockProps = {
	page: number;
	pathSegment: string;
	search: string;
	totalPages: number;
};

export const PaginationButtonsBlock = ({
	page,
	pathSegment,
	search,
	totalPages,
}: PaginationButtonsBlockProps) => {
	return (
		<div className="flex items-center space-x-2">
			<Button asChild size="icon" className="rounded-full">
				<Link
					href={{
						pathname: `/${pathSegment}`,
						query: {
							...(search ? { search } : {}),
							page: page > 1 ? page - 1 : 1,
						},
					}}
				>
					<ChevronLeft className="h-4 w-4 font-bold" />
				</Link>
			</Button>

			<Button asChild size="icon" className="rounded-full">
				<Link
					href={{
						pathname: `/${pathSegment}`,
						query: {
							...(search ? { search } : {}),
							page: page < totalPages ? page + 1 : totalPages,
						},
					}}
				>
					<ChevronRight className="h-4 w-4 font-bold" />
				</Link>
			</Button>
		</div>
	);
};
