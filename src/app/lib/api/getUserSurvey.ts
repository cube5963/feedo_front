import { gql } from "@apollo/client";
import client from "../apolloClient";

const GetUserSurvey = gql`
  query getUserSurvey($loginid: String!) {
    getUserSurvey(loginid: $loginid) {
        id
        title
    }
  }
`;


export async function getUserSurvey(loginid: string) {
    const { data } = await client.query({
        query: GetUserSurvey,
        variables: { loginid },
    });

    return data.getUserSurvey;
}