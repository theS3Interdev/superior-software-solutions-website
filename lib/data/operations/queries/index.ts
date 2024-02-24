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
		blogs(first: 89, orderBy: createdAt_DESC) {
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

/* query to retrieve all blogs in summary */
export const qryAllProjectSummary = gql`
	query qryAllProjectSummary {
		projects(first: 89, orderBy: createdAt_DESC) {
			title
			slug
			image
			solutions {
				title
			}
			excerpt
		}
	}
`;

/* query to retrieve all blogs and allow for counting */
export const qryAllProjectSummaryCount = gql`
	query qryAllProjectSummaryCount {
		projects(first: 89) {
			slug
		}
	}
`;

/* query retrieve project by slug */
export const qryProjectBySlug = gql`
	query qryProjectBySlug($slug: String!) {
		projects(where: { slug: $slug }) {
			title
			slug
			image
			excerpt
			solutions {
				title
			}
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

/* query to retrieve solutions page */
export const qrySolutionsPage = gql`
	query qrySolutionsPage {
		pages(where: { slug: "solutions" }) {
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

/* query to retrieve all solutions in summary */
export const qryAllSolutionSummary = gql`
	query qryAllSolutionSummary {
		solutions(first: 89, orderBy: createdAt_DESC) {
			title
			slug
			metaDescription
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
			}
		}
	}
`;

/* query to retrieve all solutions and allow for counting */
export const qryAllSolutionSummaryCount = gql`
	query qryAllSolutionSummaryCount {
		projects(first: 89) {
			slug
		}
	}
`;

/* query retrieve solution by slug */
export const qrySolutionBySlug = gql`
	query qrySolutionBySlug($slug: String!) {
		solutions(where: { slug: $slug }) {
			title
			slug
			metaDescription
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
			benefitsBlock {
				header {
					content {
						header {
							title
							subtitle
						}
					}
				}
				list {
					content {
						header {
							title
							subtitle
						}
					}
				}
			}
			projectsHeaderBlock {
				header {
					title
					subtitle
				}
			}
			projects(first: 89, orderBy: createdAt_DESC) {
				title
				slug
				image
				excerpt
			}
			pricingHeaderBlock {
				header {
					title
					subtitle
				}
			}
			solutionPrices {
				title
				image
				description {
					html
				}
				priceDetails {
					list {
						header {
							title
						}
						content {
							html
						}
					}
				}
			}
			faqHeader {
				header {
					title
					subtitle
				}
			}
			faqs {
				title
				faqs {
					list(first: 13) {
						header {
							title
						}
						content {
							html
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

/* query to retrieve about page */
export const qryAboutPage = gql`
	query qryAboutPage {
		pages(where: { slug: "about" }) {
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
					image
				}
				list {
					content {
						header {
							title
						}
						content {
							html
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
