import {
	PrivacyPolicyContentWidget,
	PrivacyPolicyHeroWidget,
} from "@/components/index";

const PrivacyPolicyPage = () => {
	return (
		<article className="mt-24 space-y-8">
			<section id="hero">
				<PrivacyPolicyHeroWidget />

				<PrivacyPolicyContentWidget />
			</section>
		</article>
	);
};

export default PrivacyPolicyPage;
