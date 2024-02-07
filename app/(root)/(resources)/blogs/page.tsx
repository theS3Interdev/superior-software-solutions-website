import { BlogsContentWidget, BlogsHeroWidget } from "@/components/index";

const BlogsPage = () => {
	return (
		<article className="mt-24 space-y-8">
			<section id="hero">
				<BlogsHeroWidget />
			</section>

			<section id="content">
				<BlogsContentWidget />
			</section>
		</article>
	);
};

export default BlogsPage;
