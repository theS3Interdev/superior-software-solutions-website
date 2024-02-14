import { gql } from "graphql-request";

/* create a consult booking request */
export const createConsultBookingRequest = gql`
	mutation createConsultBookingRequest(
		$firstName: String!
		$lastName: String!
		$emailAddress: String!
		$phoneNumber: String
		$webUrl: String
		$projectInterest: String!
		$projectDetails: String!
	) {
		createConsultBookingRequest(
			data: {
				firstName: $firstName
				lastName: $lastName
				emailAddress: $emailAddress
				phoneNumber: $phoneNumber
				webUrl: $webUrl
				projectInterest: $projectInterest
				projectDetails: $projectDetails
			}
		) {
			id
		}
	}
`;
