import { gql } from "@apollo/client";
import client from "../apolloClient";

const CreateSurvey = gql`
    mutation CreateSurvey($createsurveyinput: CreateSurveyInput!) {
        createSurvey(createsurveyinput: $createsurveyinput)
    }
`;

export async function createSurvey(formData: any) {
    const response = await client.mutate({
        mutation: CreateSurvey,
        variables: { createsurveyinput: formData.createsurveyinput },
    });
    return response.data;
}

