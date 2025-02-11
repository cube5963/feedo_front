import { gql } from "@apollo/client";
import client from "../apolloClient";

const GetAnswer = gql`
    query getAnswer($surveyId: Int!) {
        getAnswer(surveyId: $surveyId) {
            id
            title
            description
            questions {
                id
                title
                responses {
                    id
                    data
                }
            }
        }
    }
`;

export async function getAnswer(surveyId: number) {
    const { data } = await client.query({
        query: GetAnswer,
        variables: { surveyId },
    });

    return data.getAnswer;
}