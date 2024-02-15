import { NextResponse } from "next/server";
import { GraphQLClient } from "graphql-request";

import { createSupportRequest } from "@/lib/data/operations/mutations/index";

const endpoint = process.env.NEXT_PUBLIC_CONTENT_API!;

const authToken = process.env.AUTH_TOKEN!;

const secretKey = process.env.RECAPTCHA_SECRET_KEY!;

export async function POST(request: Request) {
	const client = new GraphQLClient(endpoint, {
		headers: { authorization: `Bearer ${authToken}` },
	});

	try {
		const authEndpoint = "https://www.google.com/recaptcha/api/siteverify";

		const body = await request.json();

		const {
			businessName,
			firstName,
			lastName,
			emailAddress,
			requestDate,
			supportService,
			supportDescription,
			requestPriority,
			gRecaptchaToken,
		} = body;

		const result = await fetch(authEndpoint, {
			method: "POST",
			body: `secret=${secretKey}&response=${gRecaptchaToken}`,
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
		});

		const { success, score } = await result.json();

		console.log(
			"Was the reCAPTCHA token valid?",
			success,
			"What was the reCAPTCHA score?",
			score,
		);

		if (success && score >= 0.5) {
			const supportRequest = await client.request(createSupportRequest, {
				businessName: businessName,
				firstName: firstName,
				lastName: lastName,
				emailAddress: emailAddress,
				requestDate: requestDate,
				supportService: supportService,
				supportDescription: supportDescription,
				requestPriority: requestPriority,
			});

			return NextResponse.json(supportRequest);
		} else {
			/* the authorization request was unsuccessful */
			return new NextResponse("Unauthorized.", { status: 401 });
		}
	} catch (error) {
		console.error("[SUPPORT_REQUEST_POST]", error);
		return new NextResponse("Internal server error.", { status: 500 });
	}
}
