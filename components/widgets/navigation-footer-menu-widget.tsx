import Link from "next/link";

type NavigationFooterMenuWidgetProps = {
	title: string;
	links: { label: string; url: string }[];
};

export const NavigationFooterMenuWidget = ({
	title,
	links,
}: NavigationFooterMenuWidgetProps) => {
	return (
		<div>
			<p className="font-semibold uppercase tracking-wide">{title}</p>

			<ul className="mt-3 space-y-3">
				{links.map((link, index) => (
					<li key={index}>
						<Link
							href={link.url}
							className="cursor-pointer text-muted-foreground duration-300 hover:text-primary hover:underline"
						>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
