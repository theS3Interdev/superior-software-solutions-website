import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { RecaptchaProvider } from '@/lib/providers/google-recaptcha-provider';
import { ToastProvider } from '@/lib/providers/toast-provider';

import '@/app/styles/globals.css';

type RootLayoutProps = {
	children: ReactNode;
};

/* get the url depending on the environment */
const absoluteUrl =
	process.env.NODE_ENV === 'production'
		? process.env.NEXT_PUBLIC_PRODUCTION_URL!
		: process.env.NEXT_PUBLIC_DEVELOPMENT_URL!;

export const metadata = {
	metadataBase: new URL(absoluteUrl),
	title: {
		default: 'Superior Software Solutions',
		template: '%s | Superior Software Solutions',
	},
	description:
		"Kenya's premier software design studio. Superior Software Solutions: websites, webapps, success stories. Let's craft yours.",
};

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html lang="en">
			<body className="scroll-smooth font-sans antialiased">
				<RecaptchaProvider>
					{children}
					<Analytics />
					<SpeedInsights />
					<ToastProvider />
				</RecaptchaProvider>
			</body>
		</html>
	);
};

export default RootLayout;
