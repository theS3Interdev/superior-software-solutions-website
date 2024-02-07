import { Separator } from "@/components/index";

type HeaderDisplayBlockProps = {
	title?: string;
	subtitle?: string;
};

export const HeaderDisplayBlock = ({
	title,
	subtitle,
}: HeaderDisplayBlockProps) => {
	return (
		<div className="space-y-3">
			<Separator className="mb-5" />

			{title && (
				<h1 className="text-2xl font-semibold tracking-wide lg:text-3xl">
					{title}
				</h1>
			)}

			{subtitle && (
				<p className="w-full text-pretty leading-loose text-muted-foreground">
					{subtitle}
				</p>
			)}

			<Separator className="mt-5" />
		</div>
	);
};
