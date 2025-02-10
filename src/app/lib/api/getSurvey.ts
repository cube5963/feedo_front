import { gql } from "@apollo/client";
import client from "../apolloClient";

const GetSurvey = gql`
  query getSurvey($surveyid: Float!) {
    getSurvey(surveyid: $surveyid) {
      id
      title
      description
      questions {
        id
        title
        type
        content
      }
    }
  }
`;

export async function getSurvey(surveyid: number) {
  const { data } = await client.query({
    query: GetSurvey,
    variables: { surveyid },
  });

  return data.getSurvey;
}
