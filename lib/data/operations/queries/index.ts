import { gql } from "graphql-request";

/* query to retrieve global data */
export const qryGlobals = gql`
	query qryGlobals {
		globals(where: { siteName: "Superior Software Solutions" }) {
			siteName
			siteMetaDescription
			siteLogo
			siteTagline
			solutionSummary
			ctaButton {
				label
				url
			}
			siteContactDetails {
				list {
					header {
						title
						subtitle
					}
				}
			}
			socialMediaLinks {
				list {
					header {
						title
						subtitle
					}
				}
			}
			navigationHeader {
				links {
					label
					url
				}
			}
			navigationFooterSolutions {
				title
				links {
					label
					url
				}
			}
			navigationFooterResources {
				title
				links {
					label
					url
				}
			}
			navigationFooterBusiness {
				title
				links {
					label
					url
				}
			}
		}
	}
`;

/* query to retrieve privacy policy page data */
export const qryPrivacyPolicyPage = gql`
	query qryPrivacyPolicyPage {
		pages(where: { slug: "privacy-policy" }) {
			pageTitle
			slug
			pageMetaDescription
			heroActionBlock {
				content {
					content {
						header {
							title
						}
					}
					image
				}
			}
			pasBlock {
				header {
					content {
						header {
							title
							subtitle
						}
						content {
							html
						}
					}
				}
			}
		}
	}
`;

/* query to retrieve home page data */
export const qryHomePage = gql`
	query qryHomePage {
		pages(where: { slug: "home" }) {
			pageTitle
			slug
			pageMetaDescription
			heroActionBlock {
				content {
					content {
						header {
							title
							subtitle
						}
					}
					image
				}
				links {
					label
					url
				}
			}
			callToAction {
				image
				title
				content {
					html
				}
				link {
					label
					url
				}
			}
		}
	}
`;
