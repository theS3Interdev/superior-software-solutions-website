import Link from "next/link";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";

import { Container } from "@/components/container";
import {
	Button,
	NCImageDisplayBlock,
	Separator,
	ThemeToggleBlock,
} from "@/components/index";

type NavigationFooterBlockProps = {
	siteName: string;
	siteLogo: { secure_url: string };
	siteTagline: string;
	solutionSummary: string;
	socialMediaLinks: {
		list: {
			header: {
				title: string;
				subtitle: string;
			};
		}[];
	};
	navigationFooterSolutions: {
		title: string;
		links: { label: string; url: string }[];
	};
	navigationFooterResources: {
		title: string;
		links: { label: string; url: string }[];
	};
	navigationFooterBusiness: {
		title: string;
		links: { label: string; url: string }[];
	};
};

export const NavigationFooterBlock = ({
	siteName,
	siteLogo,
	siteTagline,
	solutionSummary,
	socialMediaLinks,
	navigationFooterSolutions,
	navigationFooterResources,
	navigationFooterBusiness,
}: NavigationFooterBlockProps) => {
	const currentYear = new Date().getFullYear();

	return (
		<div className="bg-secondary py-8 dark:bg-transparent">
			<Container>
				<div className="mb-8 grid gap-16 lg:grid-cols-5">
					<div className="lg:col-span-2 lg:max-w-lg">
						<Link href="/" className="inline-flex items-center">
							<div className="relative h-8 w-8">
								<NCImageDisplayBlock
									imageSrc={siteLogo.secure_url}
									imageAlt={siteName}
								/>
							</div>

							<span className="ml-1 text-lg font-medium lg:text-2xl">
								{siteName}
							</span>
						</Link>

						<div className="mt-4 space-y-5 text-muted-foreground">
							<p className="text-pretty leading-loose sm:max-w-sm">
								{solutionSummary}
							</p>
							<p className="text-sm font-medium">{siteTagline}</p>
						</div>
					</div>

					<div className="grid grid-cols-2 gap-5 lg:col-span-3 lg:grid-cols-3">
						<div>
							<p className="font-medium uppercase tracking-wide">
								{navigationFooterSolutions.title}
							</p>

							<ul className="mt-3 space-y-3">
								{navigationFooterSolutions.links.map((link, index) => (
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

						<div>
							<p className="font-medium uppercase tracking-wide">
								{navigationFooterResources.title}
							</p>

							<ul className="mt-3 space-y-3">
								{navigationFooterResources.links.map((link, index) => (
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

						<div>
							<p className="font-medium uppercase tracking-wide">
								{navigationFooterBusiness.title}
							</p>

							<ul className="mt-3 space-y-3">
								{navigationFooterBusiness.links.map((link, index) => (
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
					</div>
				</div>

				<Separator className="my-5" />

				<div className="flex flex-col items-center justify-between space-y-3 p-5 lg:flex-row lg:space-y-0">
					<div className="-mx-3 flex">
						<div className="flex space-x-3">
							<Button size="icon" variant="outline" asChild>
								<Link
									href={socialMediaLinks.list[0].header.subtitle}
									target="_blank"
								>
									<Facebook className="h-5 w-5" />
								</Link>
							</Button>

							<Button size="icon" variant="outline" asChild>
								<Link
									href={socialMediaLinks.list[1].header.subtitle}
									target="_blank"
								>
									<Github className="h-5 w-5" />
								</Link>
							</Button>

							<Button size="icon" variant="outline" asChild>
								<Link
									href={socialMediaLinks.list[2].header.subtitle}
									target="_blank"
								>
									<Instagram className="h-5 w-5" />
								</Link>
							</Button>

							<Button size="icon" variant="outline" asChild>
								<Link
									href={socialMediaLinks.list[3].header.subtitle}
									target="_blank"
								>
									<Linkedin className="h-5 w-5" />
								</Link>
							</Button>

							<Button size="icon" variant="outline" asChild>
								<Link
									href={socialMediaLinks.list[4].header.subtitle}
									target="_blank"
								>
									<Twitter className="h-5 w-5" />
								</Link>
							</Button>
						</div>
					</div>

					<p className="text-pretty text-center text-sm">
						&copy; Copyright {currentYear} {siteName}.
					</p>

					<ThemeToggleBlock />
				</div>
			</Container>
		</div>
	);
};
