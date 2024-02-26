"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Container } from "@/components/container";
import {
	Button,
	ImageDisplayBlock,
	Separator,
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/index";

type NavigationHeaderBlockProps = {
	siteName: string;
	siteLogo: { secure_url: string };
	ctaButton: { label: string; url: string };
	navigationHeader: { links: { label: string; url: string }[] };
};

export const NavigationHeaderBlock = ({
	siteName,
	siteLogo,
	ctaButton,
	navigationHeader,
}: NavigationHeaderBlockProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="fixed top-0 z-30 flex w-full justify-between border-b bg-secondary py-3 dark:bg-background">
			<Container>
				<div className="relative flex h-16 w-full items-center justify-between">
					<div className="flex items-center space-x-1">
						<Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
							<SheetTrigger asChild>
								<Menu className="h-8 w-8 cursor-pointer lg:hidden" />
							</SheetTrigger>

							<SheetContent side="left" className="overflow-y-auto">
								<SheetHeader>
									<SheetTitle className="m-2">
										<Link
											href="/"
											className="flex items-center space-x-1"
											onClick={() => setIsMenuOpen(false)}
										>
											<h2 className="text-pretty font-medium">{siteName}</h2>
										</Link>
									</SheetTitle>
								</SheetHeader>

								<div className="flex flex-col text-center">
									<Separator className="my-3" />

									<>
										{navigationHeader.links.map((link, index) => (
											<Button
												key={index}
												variant="link"
												asChild
												className="mb-3"
											>
												<Link
													href={link.url}
													className="text-lg font-semibold uppercase dark:text-white"
													onClick={() => setIsMenuOpen(false)}
												>
													{link.label}
												</Link>
											</Button>
										))}
									</>
								</div>

								<Separator className="my-3" />

								<SheetFooter>
									<SheetClose asChild>
										<Button
											type="submit"
											asChild
											className="mt-2 w-full bg-primary text-secondary"
										>
											<Link
												href={ctaButton.url}
												className="text-lg font-semibold uppercase"
											>
												{ctaButton.label}
											</Link>
										</Button>
									</SheetClose>
								</SheetFooter>
							</SheetContent>
						</Sheet>

						<Link href="/" className="flex items-center space-x-1">
							<div className="relative hidden aspect-square h-8 w-8 lg:block">
								<ImageDisplayBlock
									imageSrc={siteLogo.secure_url}
									imageAlt={siteName}
								/>
							</div>

							<h2 className="hidden text-2xl font-semibold lg:block">
								{siteName}
							</h2>

							<h2 className="text-xl font-semibold lg:hidden">{siteName}</h2>
						</Link>
					</div>

					<div className="flex items-center justify-between">
						<div className="hidden lg:flex lg:items-center lg:justify-between">
							{navigationHeader.links.map((link, index) => (
								<Button key={index} variant="link" asChild className="mx-2">
									<Link
										href={link.url}
										className="text-lg font-semibold uppercase dark:text-white"
									>
										{link.label}
									</Link>
								</Button>
							))}
						</div>

						<div className="hidden lg:flex lg:items-center lg:justify-between">
							<Button asChild>
								<Link
									href={ctaButton.url}
									className="text-lg font-semibold uppercase"
								>
									{ctaButton.label}
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</Container>
		</nav>
	);
};
