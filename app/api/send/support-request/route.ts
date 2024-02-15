import { NextResponse } from "next/server";
import { Resend } from "resend";

import { SupportRequestNotification } from "@/components/index";

const resend = new Resend(process.env.RESEND_API_KEY)!;

export async function POST(request: Request) {
	try {
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
		} = body;

		const notification = await resend.emails.send({
			from: "Mailer @ S3 <mailer@s3.co.ke>",
			reply_to: "Support @ S3 <hello@s3interdev.com>",
			to: ["hello@s3interdev.com"],
			subject: "🛟 New Support Request 🛟",
			react: SupportRequestNotification({
				businessName: businessName,
				firstName: firstName,
				lastName: lastName,
				emailAddress: emailAddress,
				requestDate: requestDate,
				supportService: supportService,
				supportDescription: supportDescription,
				requestPriority: requestPriority,
			}),
		});

		return NextResponse.json(notification);
	} catch (error) {
		console.error("[SUPPORT_REQUEST_SEND]", error);
		return new NextResponse("Internal server error.", { status: 500 });
	}
}
