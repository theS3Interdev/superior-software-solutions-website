import {
	qryGlobals,
	qryPrivacyPolicyPage,
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
