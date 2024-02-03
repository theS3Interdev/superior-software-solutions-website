import { ReactNode } from 'react';
import type { Metadata } from 'next';

import { ToastProvider } from '@/lib/providers/toast-provider';

import '@/app/styles/globals.css';

type RootLayoutProps = {
	children: ReactNode;
};

export const metadata: Metadata = {
	title: {
		default: 'Next.JS Starter Template App',
		template: '%s | Superior Software Solutions',
	},
	description:
		'Starter template for Next.JS projects using TypeScript and Shadcn/UI.',
};

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html lang="en">
			<body className="scroll-smooth font-sans antialiased">
				{children}
				<ToastProvider />
			</body>
		</html>
	);
};

export default RootLayout;
