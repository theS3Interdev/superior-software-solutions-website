import { ReactNode } from 'react';

type LayoutProps = {
	children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="flex h-screen flex-col">
			<header>Header Section</header>

			<main>{children}</main>

			<footer className="mt-auto">Footer Section</footer>
		</div>
	);
};

export default Layout;
