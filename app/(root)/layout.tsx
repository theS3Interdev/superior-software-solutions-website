import { ReactNode } from "react";

import {
	NavigationFooterBlock,
	NavigationHeaderBlock,
} from "@/components/index";

type LayoutProps = {
	children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="flex h-screen flex-col">
			<header>
				<NavigationHeaderBlock />
			</header>

			<main>{children}</main>

			<footer className="mt-auto">
				<NavigationFooterBlock />
			</footer>
		</div>
	);
};

export default Layout;
