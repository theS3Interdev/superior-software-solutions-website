import { ReactNode } from "react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { RecaptchaProvider } from "@/lib/providers/google-recaptcha-provider";
import { ThemeProvider } from "@/lib/providers/theme-provider";
import { ToastProvider } from "@/lib/providers/toast-provider";

import "@smastrom/react-rating/style.css";
import "@/app/styles/globals.css";

export const revalidate = 60;

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

/* get the url depending on the environment */
const absoluteUrl =
	process.env.NODE_ENV === "production"
		? process.env.NEXT_PUBLIC_PRODUCTION_URL!
		: process.env.NEXT_PUBLIC_DEVELOPMENT_URL!;

export const metadata: Metadata = {
	metadataBase: new URL(absoluteUrl),
	title: {
		default: "Superior Software Solutions",
		template: "%s | Superior Software Solutions",
	},
	description:
		"Small business? Get powerful websites, emails, and apps to unleash your brand story. Focus on what you love, we'll handle the web. Superior Software Solutions.",
};

type RootLayoutProps = {
	children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html lang="en" className={`${inter.variable}`}>
			<body className="scroll-smooth font-sans antialiased">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<RecaptchaProvider>
						{children}
						<Analytics />
						<SpeedInsights />
						<ToastProvider />
					</RecaptchaProvider>
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
