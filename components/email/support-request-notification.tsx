import { format } from "date-fns";

type SupportRequestNotificationProps = {
	businessName: string;
	firstName: string;
	lastName: string;
	emailAddress: string;
	requestDate: string;
	supportService: string;
	supportDescription: string;
	requestPriority: string;
};

export const SupportRequestNotification = ({
	businessName,
	firstName,
	lastName,
	emailAddress,
	requestDate,
	supportService,
	supportDescription,
	requestPriority,
}: SupportRequestNotificationProps) => {
	return (
		<div>
			<p>Hello Team?</p>
			<p>A new support request has been received with the following details:</p>
			<ul>
				<li>
					<strong>Company:</strong> {businessName}
				</li>
				<li>
					<strong>First Name:</strong> {firstName}
				</li>
				<li>
					<strong>Last Name:</strong> {lastName}
				</li>
				<li>
					<strong>Email:</strong> {emailAddress}
				</li>
				<li>
					<strong>Date:</strong> {format(requestDate, "PPPP")}
				</li>
				<li>
					<strong>Service Subscribed:</strong> {supportService}
				</li>
				<li>
					<strong>Support Description:</strong> {supportDescription}
				</li>
				<li>
					<strong>Support Priority:</strong> {requestPriority}
				</li>
			</ul>
			<p>
				Please acknowledge this message and initiate the support process as soon
				as possible.
			</p>
			<p>Your prompt attention is appreciated.</p>
			<p>
				Thank you for your dedication to providing exceptional client support.
			</p>
			<p>
				<strong>Mailer @ S3</strong>
			</p>
		</div>
	);
};
