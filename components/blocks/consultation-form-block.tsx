"use client";

import { useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
	firstName: z.string().min(1, { message: "What is your first name?" }),
	lastName: z.string().min(1, { message: "What is your last name?" }),
	emailAddress: z.string().email({ message: "What is your email address?" }),
	phoneNumber: z.string().optional(),
	webUrl: z.string().optional(),
	projectInterest: z.string({
		required_error: "What service are you interested in?",
	}),
	projectDetails: z
		.string()
		.min(10, { message: "What do you want us to help you achieve?" })
		.max(500, {
			message: "Your project details should not be longer than 500 characters.",
		}),
	consent: z.boolean({
		required_error:
			"Do you consent for us to use the information provided to contact you?",
	}),
	policy: z.boolean({
		required_error: "Do you accept the terms of the privacy policy?",
	}),
});

export const ConsultationFormBlock = () => {
	const router = useRouter();

	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			emailAddress: "",
			phoneNumber: "",
			webUrl: "",
			projectInterest: "",
			projectDetails: "",
			consent: false,
			policy: false,
		},
	});

	const { executeRecaptcha } = useGoogleReCaptcha();

	const handleRequest = useCallback(
		async (values: z.infer<typeof formSchema>) => {
			if (!executeRecaptcha) {
				console.error("Could not get the reCAPTCHA token.");
				return;
			}

			try {
				/* get token from the reCAPTCHA servers */
				const gRecaptchaToken = await executeRecaptcha(
					"ConsultBookingRequestForm",
				);

				console.log("reCAPTCHA token: ", gRecaptchaToken);

				/* the reCAPTCHA token was not generated */
				if (!gRecaptchaToken) {
					return;
				}

				const token = { gRecaptchaToken: gRecaptchaToken };

				const postingEndpoint = "/api/consult-booking-request";

				const notificationEndpoint = "/api/send/consult-booking-request";

				/* post values + reCAPTCHA token to the backend */
				await fetch(postingEndpoint, {
					method: "POST",
					body: JSON.stringify({ ...values, ...token }),
					headers: { "Content-Type": "application/json" },
				});

				/* the response was successful */
				router.refresh();

				/* redirect to home page after a slight delay */
				setTimeout(() => {
					router.push("/");
				}, 3400);

				/* show success toast */
				toast.success("Thank you! We'll be in touch soon.");

				/* send notification email */
				await fetch(notificationEndpoint, {
					method: "POST",
					body: JSON.stringify({ ...values }),
					headers: { "Content-Type": "application/json" },
				});
			} catch (error) {
				/* the response was not successful */
				toast.error("An unknown error has occured. Please try again.");
			}
		},
		[executeRecaptcha, router],
	);

	return (
		<div className="mx-auto max-w-4xl rounded-md bg-secondary p-3">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(handleRequest)}>
					<div className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2">
						<FormField
							control={form.control}
							name="firstName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>First Name</FormLabel>
									<FormControl>
										<Input placeholder="First Name" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="lastName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Last Name</FormLabel>
									<FormControl>
										<Input placeholder="Last Name" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="emailAddress"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email Address</FormLabel>
									<FormControl>
										<Input
											placeholder="Email Address"
											type="email"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="phoneNumber"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Phone Number</FormLabel>
									<FormControl>
										<Input placeholder="Phone Number" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div className="mt-3 grid grid-cols-1 gap-5">
						<FormField
							control={form.control}
							name="webUrl"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Website URL</FormLabel>
									<FormControl>
										<Input
											placeholder="https://www.businessname.com"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="projectInterest"
							render={({ field }) => (
								<FormItem>
									<FormLabel>What service are you interested in?</FormLabel>
									<Select onValueChange={field.onChange}>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Our services" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="Success Packages">
												Success Packages
											</SelectItem>
											<SelectItem value="Email Hosting">
												Email Hosting
											</SelectItem>
											<SelectItem value="Website Development">
												Website Development
											</SelectItem>
											<SelectItem value="Custom Webapp Development">
												Custom Webapp Development
											</SelectItem>
											<SelectItem value="Consulting">Consulting</SelectItem>
											<SelectItem value="Other">Other</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="projectDetails"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Project Details</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Type the details of your project here"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div className="mt-5 grid grid-cols-1 gap-5">
						<FormField
							control={form.control}
							name="consent"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<div className="flex items-center space-x-2">
											<Checkbox
												checked={field.value}
												onCheckedChange={field.onChange}
											/>
											<Label htmlFor="consent">
												I consent for the use of the information provided in
												this form to contact me.
											</Label>
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="policy"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<div className="flex items-center space-x-2">
											<Checkbox
												checked={field.value}
												onCheckedChange={field.onChange}
											/>
											<Label htmlFor="policy">
												I accept the terms of the{" "}
												<Link
													href="/privacy-policy"
													className=" text-primary underline"
												>
													privacy policy.
												</Link>
											</Label>
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<Button type="submit" className="mt-5 w-full font-semibold uppercase">
						Book a Consult
					</Button>
				</form>

				<div className="my-5 space-y-3 text-pretty text-center text-xs">
					<p>
						Your email address will be added to our database where we shall
						occasionally send you useful information and offers. We will never
						sell your data.
					</p>

					<p>
						Do you know of any other person or business that may like our
						services? Please, consider providing a referral.
					</p>
				</div>
			</Form>
		</div>
	);
};
