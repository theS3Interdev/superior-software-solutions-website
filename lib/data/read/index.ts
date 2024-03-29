import {
	qryAboutPage,
	qryAllBlogSummary,
	qryAllProjectSummary,
	qryAllSolutionSummary,
	qryAllTestimonials,
	qryBlogBySlug,
	qryBlogsPage,
	qryBookAConsultPage,
	qryGlobals,
	qryHomePage,
	qryLatestBlogSummary,
	qryPrivacyPolicyPage,
	qryProjectBySlug,
	qryProjectsPage,
	qrySolutionBySlug,
	qrySolutionsPage,
	qrySupportPage,
	qryTestimonialsPage,
} from "@/lib/data/operations/queries/index";

/* graphql endpoint */
const endpoint = process.env.NEXT_PUBLIC_HIGH_PERFORMANCE_CONTENT_API!;

/* get global data */
export const getGlobals = async () => {
	try {
		const result = await fetch(endpoint, {
			method: "POST",
			body: JSON.stringify({ query: qryGlobals }),
			headers: { "Content-Type": "application/json" },
		});

		const { data } = await result.json();

		return data.globals[0];
	} catch (error) {
		console.log("[GET_GLOBALS]", error);
	}
};

/* get privacy policy page */
export const getPrivacyPolicyPage = async () => {
	try {
		const result = await fetch(endpoint, {
			method: "POST",
			body: JSON.stringify({ query: qryPrivacyPolicyPage }),
			headers: { "Content-Type": "application/json" },
		});

		const { data } = await result.json();

		return data.pages[0];
	} catch (error) {
		console.log("[GET_PRIVACY_POLICY_PAGE]", error);
	}
};

/* get home page */
export const getHomePage = async () => {
	try {
		const result = await fetch(endpoint, {
			method: "POST",
			body: JSON.stringify({ query: qryHomePage }),
			headers: { "Content-Type": "application/json" },
		});

		const { data } = await result.json();

		return data.pages[0];
	} catch (error) {
		console.log("[GET_HOME_PAGE]", error);
	}
};

/* get testimonials page */
export const getTestimonialsPage = async () => {
	try {
		const result = await fetch(endpoint, {
			method: "POST",
			body: JSON.stringify({ query: qryTestimonialsPage }),
			headers: { "Content-Type": "application/json" },
		});

		const { data } = await result.json();

		return data.pages[0];
	} catch (error) {
		console.log("[GET_TESTIMONIALS_PAGE]", error);
	}
};

/* get all testimonials */
export const getAllTestimonials = async () => {
	try {
		const result = await fetch(endpoint, {
			method: "POST",
			body: JSON.stringify({ query: qryAllTestimonials }),
			headers: { "Content-Type": "application/json" },
		});

		const { data } = await result.json();

		return data.testimonials;
	} catch (error) {
		console.log("[GET_ALL_TESTIMONIALS]", error);
	}
};

/* get blogs page */
export const getBlogsPage = async () => {
	try {
		const result = await fetch(endpoint, {
			method: "POST",
			body: JSON.stringify({ query: qryBlogsPage }),
			headers: { "Content-Type": "application/json" },
		});

		const { data } = await result.json();

		return data.pages[0];
	} catch (error) {
		console.log("[GET_BLOGS_PAGE]", error);
	}
};

/* get latest blogs in summary */
export const getLatestBlogSummary = async () => {
	try {
		const result = await fetch(endpoint, {
			method: "POST",
			body: JSON.stringify({
				query: qryLatestBlogSummary,
			}),
			headers: { "Content-Type": "application/json" },
		});

		const { data } = await result.json();

		return data.blogs;
	} catch (error) {
		console.log("GET_LATEST_BLOG_SUMMARY", error);
	}
};

/* get all blogs in summary */
export const getAllBlogSummary = async () => {
	try {
		const result = await fetch(endpoint, {
			method: "POST",
			body: JSON.stringify({
				query: qryAllBlogSummary,
			}),
			headers: { "Content-Type": "application/json" },
		});

		const { data } = await result.json();

		return data.blogs;
	} catch (error) {
		console.log("GET_ALL_BLOG_SUMMARY", error);
	}
};

/* get blog by slug */
export const getBlogBySlug = async (slug: string) => {
	try {
		const res = await fetch(endpoint, {
			method: "POST",
			body: JSON.stringify({
				query: qryBlogBySlug,
				variables: { slug: slug },
			}),
			headers: { "Content-Type": "application/json" },
		});

		const { data } = await res.json();

		return data.blogs[0];
	} catch (error) {
		console.log("GET_BLOG_BY_SLUG", error);
	}
};

/* get the book a consult page */
export const getBookAConsultPage = async () => {
	try {
		const result = await fetch(endpoint, {
			method: "POST",
			body: JSON.stringify({ query: qryBookAConsultPage }),
			headers: { "Content-Type": "application/json" },
		});

		const { data } = await result.json();

		return data.pages[0];
	} catch (error) {
		console.log("GET_BOOK_A_CONSULT_PAGE", error);
	}
};

/* get the support page */
export const getSupportPage = async () => {
	try {
		const result = await fetch(endpoint, {
			method: "POST",
			body: JSON.stringify({ query: qrySupportPage }),
			headers: { "Content-Type": "application/json" },
		});

		const { data } = await result.json();

		return data.pages[0];
	} catch (error) {
		console.log("GET_SUPPORT_PAGE", error);
	}
};

/* get the projects page */
export const getProjectsPage = async () => {
	try {
		const result = await fetch(endpoint, {
			method: "POST",
			body: JSON.stringify({ query: qryProjectsPage }),
			headers: { "Content-Type": "application/json" },
		});

		const { data } = await result.json();

		return data.pages[0];
	} catch (error) {
		console.log("GET_PROJECTS_PAGE", error);
	}
};

/* get all projects in summary */
export const getAllProjectSummary = async () => {
	try {
		const result = await fetch(endpoint, {
			method: "POST",
			body: JSON.stringify({
				query: qryAllProjectSummary,
			}),
			headers: { "Content-Type": "application/json" },
		});

		const { data } = await result.json();

		return data.projects;
	} catch (error) {
		console.log("GET_ALL_PROJECT_SUMMARY", error);
	}
};

/* get project by slug */
export const getProjectBySlug = async (slug: string) => {
	try {
		const res = await fetch(endpoint, {
			method: "POST",
			body: JSON.stringify({
				query: qryProjectBySlug,
				variables: { slug: slug },
			}),
			headers: { "Content-Type": "application/json" },
		});

		const { data } = await res.json();

		return data.projects[0];
	} catch (error) {
		console.log("GET_PROJECT_BY_SLUG", error);
	}
};

/* get solution page */
export const getSolutionsPage = async () => {
	try {
		const result = await fetch(endpoint, {
			method: "POST",
			body: JSON.stringify({ query: qrySolutionsPage }),
			headers: { "Content-Type": "application/json" },
		});

		const { data } = await result.json();

		return data.pages[0];
	} catch (error) {
		console.log("[GET_SOLUTIONS_PAGE]", error);
	}
};

/* get all solutions in summary */
export const getAllSolutionSummary = async () => {
	try {
		const result = await fetch(endpoint, {
			method: "POST",
			body: JSON.stringify({
				query: qryAllSolutionSummary,
			}),
			headers: { "Content-Type": "application/json" },
		});

		const { data } = await result.json();

		return data.solutions;
	} catch (error) {
		console.log("GET_ALL_SOLUTION_SUMMARY", error);
	}
};

/* get solution by slug */
export const getSolutionBySlug = async (slug: string) => {
	try {
		const res = await fetch(endpoint, {
			method: "POST",
			body: JSON.stringify({
				query: qrySolutionBySlug,
				variables: { slug: slug },
			}),
			headers: { "Content-Type": "application/json" },
		});

		const { data } = await res.json();

		return data.solutions[0];
	} catch (error) {
		console.log("GET_SOLUTION_BY_SLUG", error);
	}
};

/* get about page */
export const getAboutPage = async () => {
	try {
		const result = await fetch(endpoint, {
			method: "POST",
			body: JSON.stringify({ query: qryAboutPage }),
			headers: { "Content-Type": "application/json" },
		});

		const { data } = await result.json();

		return data.pages[0];
	} catch (error) {
		console.log("[GET_ABOUT_PAGE]", error);
	}
};
