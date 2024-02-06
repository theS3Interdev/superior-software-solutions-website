import { ThemeToggleBlock } from "@/components/index";

type NavigationFooterBlockProps = {
	siteName: string;
	siteLogo: string;
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
	return (
		<div>
			Navigation Footer Block
			<ThemeToggleBlock />
		</div>
	);
};
