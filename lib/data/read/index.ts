import {
	qryAllTestimonials,
	qryGlobals,
	qryHomePage,
	qryPrivacyPolicyPage,
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
