"use client";

import { useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils/utils";

import { Button } from "@/components/index";
import { Calendar } from "@/components/index";
import { Checkbox } from "@/components/index";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/index";
import { Input } from "@/components/index";
import { Label } from "@/components/index";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/index";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/index";
import { Textarea } from "@/components/index";

const formSchema = z.object({
	businessName: z.string().min(1, { message: "What is your business called?" }),
	firstName: z.string().min(1, { message: "What is your first name?" }),
	lastName: z.string().min(1, { message: "What is your last name?" }),
	emailAddress: z.string().email({ message: "What is your email address?" }),
	requestDate: z.date({
		required_error: "Please select a date.",
	}),
	supportService: z.string({
		required_error: "Which of our services are you subscribed to?",
	}),
	supportDescription: z
		.string()
		.min(10, { message: "Describe the issue you want us to help you with?" })
		.max(500, {
			message: "Your support description is overly verbose.",
		}),
	requestPriority: z.string({
		required_error: "What is your priority for this support call?",
	}),
	consent: z.boolean({
		required_error:
			"Do you consent for us to use the information provided to contact you?",
	}),
	policy: z.boolean({
		required_error: "Do you accept the terms of the privacy policy?",
	}),
});

export const SupportFormBlock = () => {
	const router = useRouter();

	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			businessName: "",
			firstName: "",
			lastName: "",
			emailAddress: "",
			requestDate: new Date(),
			supportService: "",
			supportDescription: "",
			requestPriority: "",
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
				const gRecaptchaToken = await executeRecaptcha("SupportRequestForm");

				console.log("reCAPTCHA token: ", gRecaptchaToken);

				/* the reCAPTCHA token was not generated */
				if (!gRecaptchaToken) {
					return;
				}

				const token = { gRecaptchaToken: gRecaptchaToken };

				const postingEndpoint = "/api/support-request";

				const notificationEndpoint = "/api/send/support-request";

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
					<div className="mt-3 grid grid-cols-1 gap-5">
						<FormField
							control={form.control}
							name="businessName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Business Name</FormLabel>
									<FormControl>
										<Input placeholder="Business Name" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

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
							name="requestDate"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Support Request Date</FormLabel>
									<Popover>
										<PopoverTrigger asChild>
											<FormControl>
												<Button
													variant={"outline"}
													className={cn(
														"w-full pl-3 text-left font-normal",
														!field.value && "text-muted-foreground",
													)}
												>
													{field.value ? (
														format(field.value, "yyyy-MM-dd")
													) : (
														<span>Enter a Date</span>
													)}
													<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
												</Button>
											</FormControl>
										</PopoverTrigger>
										<PopoverContent className="w-auto p-0" align="start">
											<Calendar
												mode="single"
												selected={field.value}
												onSelect={field.onChange}
												disabled={(date) =>
													date < new Date(new Date().setHours(0, 0, 0, 0))
												}
												initialFocus
											/>
										</PopoverContent>
									</Popover>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div className="mt-3 grid grid-cols-1 gap-5">
						<FormField
							control={form.control}
							name="supportService"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Which of our services are you subscribed to?
									</FormLabel>
									<Select onValueChange={field.onChange}>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Our Services" />
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
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="supportDescription"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Support Description</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Share your concern with clarity, providing as much detail as needed without being overly verbose."
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="requestPriority"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										What is the priority level of this request?
									</FormLabel>
									<Select onValueChange={field.onChange}>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Priority Level" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="Urgent">Urgent</SelectItem>
											<SelectItem value="High">Important</SelectItem>
											<SelectItem value="Normal">Normal</SelectItem>
											<SelectItem value="Low">Low</SelectItem>
										</SelectContent>
									</Select>
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
						Send Support Request
					</Button>
				</form>

				<div className="my-5 space-y-3 text-pretty text-center text-xs">
					<p>
						If this is a more complex request, please use the calendar link to
						schedule a call to discuss.
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
