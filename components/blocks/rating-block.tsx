import { Rating } from "@smastrom/react-rating";

type RatingBlockProps = {
	rating: number;
};

export const RatingBlock = ({ rating }: RatingBlockProps) => {
	return (
		<div>
			<Rating style={{ maxWidth: 100 }} value={rating} readOnly />
		</div>
	);
};
