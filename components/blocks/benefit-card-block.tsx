import { Separator } from "@/components/index";

type BenefitCardBlockProps = { title: string; content: string };

export const BenefitCardBlock = ({ title, content }: BenefitCardBlockProps) => {
	return (
		<div className="overflow-hidden rounded-lg border bg-secondary">
			<div className="p-5">
				<p className="text-lg font-semibold tracking-wide lg:text-xl">
					{title}
				</p>

				<Separator className="my-3 dark:bg-gray-500" />

				<p className="w-full text-pretty leading-loose text-muted-foreground">
					{content}
				</p>
			</div>
		</div>
	);
};
