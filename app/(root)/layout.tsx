import { ReactNode } from "react";

import { getGlobals } from "@/lib/data/read/index";

import {
	NavigationFooterBlock,
	NavigationHeaderBlock,
} from "@/components/index";

type LayoutProps = {
	children: ReactNode;
};

type GlobalsProps = {
	siteName: string;
	siteLogo: string;
	siteTagline: string;
	solutionSummary: string;
	ctaButton: { label: string; url: string };
	socialMediaLinks: {
		list: {
			header: {
				title: string;
				subtitle: string;
			};
		}[];
	};
	navigationHeader: { links: { label: string; url: string }[] };
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

const Layout = async ({ children }: LayoutProps) => {
	const {
		siteName,
		siteLogo,
		siteTagline,
		solutionSummary,
		ctaButton,
		socialMediaLinks,
		navigationHeader,
		navigationFooterSolutions,
		navigationFooterResources,
		navigationFooterBusiness,
	}: GlobalsProps = await getGlobals();

	return (
		<div className="flex h-screen flex-col">
			<header>
				<NavigationHeaderBlock
					siteName={siteName}
					siteLogo={siteLogo}
					ctaButton={ctaButton}
					navigationHeader={navigationHeader}
				/>
			</header>

			<main>{children}</main>

			<footer className="mt-auto">
				<NavigationFooterBlock
					siteName={siteName}
					siteLogo={siteLogo}
					siteTagline={siteTagline}
					solutionSummary={solutionSummary}
					socialMediaLinks={socialMediaLinks}
					navigationFooterSolutions={navigationFooterSolutions}
					navigationFooterResources={navigationFooterResources}
					navigationFooterBusiness={navigationFooterBusiness}
				/>
			</footer>
		</div>
	);
};

export default Layout;
