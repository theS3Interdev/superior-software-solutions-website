type ConsultBookingNotificationProps = {
	firstName: string;
	lastName: string;
	emailAddress: string;
	phoneNumber: string;
	webUrl: string;
	projectInterest: string;
	projectDetails: string;
};

export const ConsultBookingNotification = ({
	firstName,
	lastName,
	emailAddress,
	phoneNumber,
	webUrl,
	projectInterest,
	projectDetails,
}: ConsultBookingNotificationProps) => {
	return (
		<div>
			<p>Hello Team?</p>
			<p>
				Exciting news! We have a new consult booking request with the following
				details:
			</p>
			<ul>
				<li>
					<strong>First Name:</strong> {firstName}
				</li>
				<li>
					<strong>Last Name:</strong> {lastName}
				</li>
				<li>
					<strong>Email Address:</strong> {emailAddress}
				</li>
				<li>
					<strong>Phone Number:</strong> {phoneNumber}
				</li>
				<li>
					<strong>Website Url:</strong> {webUrl}
				</li>
				<li>
					<strong>Service Interest:</strong> {projectInterest}
				</li>
				<li>
					<strong>Project Details:</strong> {projectDetails}
				</li>
			</ul>
			<p>
				Please acknowledge this message and initiate contact with our new
				prospect as soon as possible.
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
