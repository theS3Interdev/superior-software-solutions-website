"use client";

import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	FacebookIcon,
	LinkedinIcon,
	XIcon,
} from "react-share";

type SocialMediaSharingBlockProps = {
	shareSummary: string;
	shareTitle: string;
	shareUrl: string;
};

export const SocialMediaSharingBlock = ({
	shareSummary,
	shareTitle,
	shareUrl,
}: SocialMediaSharingBlockProps) => {
	return (
		<div className="flex items-center space-x-3">
			<FacebookShareButton url={shareUrl}>
				<FacebookIcon size={32} round={true} />
			</FacebookShareButton>

			<LinkedinShareButton url={shareUrl} summary={shareSummary}>
				<LinkedinIcon size={32} round={true} />
			</LinkedinShareButton>

			<TwitterShareButton url={shareUrl} title={shareTitle}>
				<XIcon size={32} round={true} />
			</TwitterShareButton>
		</div>
	);
};
