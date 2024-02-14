import { NextResponse } from "next/server";
import { Resend } from "resend";

import { ConsultBookingNotification } from "@/components/index";

const resend = new Resend(process.env.RESEND_API_KEY)!;

export async function POST(request: Request) {
	try {
		const body = await request.json();

		const {
			firstName,
			lastName,
			emailAddress,
			phoneNumber,
			webUrl,
			projectInterest,
			projectDetails,
		} = body;

		const notification = await resend.emails.send({
			from: "Mailer @ S3 <mailer@s3.co.ke>",
			reply_to: "Support @ S3 <hello@s3interdev.com>",
			to: ["hello@s3interdev.com"],
			subject: "🚀 New Consult Booking Request 🚀",
			react: ConsultBookingNotification({
				firstName: firstName,
				lastName: lastName,
				emailAddress: emailAddress,
				phoneNumber: phoneNumber,
				webUrl: webUrl,
				projectInterest: projectInterest,
				projectDetails: projectDetails,
			}),
		});

		return NextResponse.json(notification);
	} catch (error) {
		console.error("[CONSULT_BOOKING_REQUEST_SEND]", error);
		return new NextResponse("Internal server error.", { status: 500 });
	}
}
