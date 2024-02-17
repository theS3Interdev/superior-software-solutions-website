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

/* query to retrieve testimonials page data */
export const qryTestimonialsPage = gql`
	query qryTestimonialsPage {
		pages(where: { slug: "testimonials" }) {
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
					}
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

/* query to retrieve all testimonials */
export const qryAllTestimonials = gql`
	query qryAllTestimonials {
		testimonials(first: 89) {
			image
			name
			title
			rating
			content {
				html
			}
		}
	}
`;

/* query to retrieve blogs page data */
export const qryBlogsPage = gql`
	query qryBlogsPage {
		pages(where: { slug: "blogs" }) {
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
					}
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

/* query to retrieve all blogs in summary */
export const qryAllBlogSummary = gql`
	query qryAllBlogSummary {
		blogs(orderBy: createdAt_DESC) {
			title
			slug
			date
			image
			excerpt
		}
	}
`;

/* query to retrieve all blogs allow for counting */
export const qryAllBlogSummaryCount = gql`
	query qryAllBlogSummaryCount {
		blogs(first: 89) {
			slug
		}
	}
`;

/* query retrieve blog by slug */
export const qryBlogBySlug = gql`
	query qryBlogBySlug($slug: String!) {
		blogs(where: { slug: $slug }) {
			title
			slug
			author {
				image
				name
				bio {
					html
				}
			}
			date
			category {
				title
			}
			image
			excerpt
			content {
				html
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

/* query to retrieve the book a consult page */
export const qryBookAConsultPage = gql`
	query qryBookAConsultPage {
		pages(where: { slug: "book-a-consult" }) {
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
				links {
					label
					url
				}
			}
			pasBlock {
				header {
					content {
						header {
							title
							subtitle
						}
					}
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

/* query to retrieve the support page */
export const qrySupportPage = gql`
	query qrySupportPage {
		pages(where: { slug: "support" }) {
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
				links {
					label
					url
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
					image
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

/* query to retrieve projects page */
export const qryProjectsPage = gql`
	query qryProjectsPage {
		pages(where: { slug: "projects" }) {
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
				links {
					label
					url
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
					image
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
