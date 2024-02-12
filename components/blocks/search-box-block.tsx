"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { SearchCheck } from "lucide-react";
import { useDebounce } from "use-debounce";

import { Input } from "@/components/index";

type SearchBoxBlockProps = {
	pathSegment: string;
	search: string;
};

export const SearchBoxBlock = ({
	pathSegment,
	search,
}: SearchBoxBlockProps) => {
	const router = useRouter();

	const initialRender = useRef(true);

	const [text, setText] = useState(search);

	const [query] = useDebounce(text, 500);

	useEffect(() => {
		if (initialRender.current) {
			initialRender.current = false;
			return;
		}

		if (!query) {
			router.push(`/${pathSegment}`);
		} else {
			router.push(`/${pathSegment}?search=${query}`);
		}
	}, [pathSegment, query, router]);

	return (
		<div className="relative rounded-md">
			<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
				<SearchCheck className="h-5 w-5" />
			</div>
			<Input
				value={text}
				placeholder="Search..."
				onChange={(e) => setText(e.target.value)}
				className="block w-full rounded-md border-0 py-1.5 pl-10 text-foreground ring-1 ring-inset ring-muted-foreground placeholder:text-foreground focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
			/>
		</div>
	);
};
