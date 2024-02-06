import { BlogContentWidget, BlogHeroWidget } from "@/components/index";

const BlogPage = () => {
	return (
		<article className="mt-24 space-y-8">
			<section id="hero">
				<BlogHeroWidget />

				<BlogContentWidget />
			</section>
		</article>
	);
};

export default BlogPage;
