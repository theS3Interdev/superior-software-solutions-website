import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/components/index";

export default async function NotFound() {
	return (
		<article className="mt-24 space-y-10">
			<section>
				<Container>
					<p className="text-pretty text-sm font-medium leading-loose">
						404 error
					</p>

					<h2 className="mt-3 text-2xl font-semibold tracking-wide lg:text-3xl">
						We can&#39;t find that page
					</h2>

					<p className="mt-3 text-pretty text-sm font-medium leading-loose">
						Sorry, the page you are looking for doesn&#39;t exist or has been
						moved.
					</p>

					<div>
						<Button asChild className="mt-4 font-semibold uppercase">
							<Link href="/">Take me home</Link>
						</Button>
					</div>
				</Container>
			</section>
		</article>
	);
}
