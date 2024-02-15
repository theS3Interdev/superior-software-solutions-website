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

/* create a support request */
export const createSupportRequest = gql`
	mutation createSupportRequest(
		$businessName: String!
		$firstName: String!
		$lastName: String!
		$emailAddress: String!
		$requestDate: Date!
		$supportService: String!
		$supportDescription: String!
		$requestPriority: String!
	) {
		createSupportRequest(
			data: {
				businessName: $businessName
				firstName: $firstName
				lastName: $lastName
				emailAddress: $emailAddress
				requestDate: $requestDate
				supportService: $supportService
				supportDescription: $supportDescription
				requestPriority: $requestPriority
			}
		) {
			id
		}
	}
`;
