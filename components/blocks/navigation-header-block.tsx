type NavigationHeaderBlockProps = {
	siteName: string;
	siteLogo: string;
	ctaButton: { label: string; url: string };
	navigationHeader: { links: { label: string; url: string }[] };
};

export const NavigationHeaderBlock = ({
	siteName,
	siteLogo,
	ctaButton,
	navigationHeader,
}: NavigationHeaderBlockProps) => {
	return <div>Navigation Header Block</div>;
};
