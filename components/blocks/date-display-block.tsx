import { format, parseISO } from "date-fns";

type DateDisplayBlockProps = {
	date: string;
};

export const DateDisplayBlock = ({ date }: DateDisplayBlockProps) => {
	return <>{format(parseISO(date), "MMMM do, yyyy")}</>;
};
