import { gql } from "@apollo/client";
import client from "../apolloClient";

// GraphQL ミューテーションのクエリ
const AnswerSurvey = gql`
  mutation AnswerSurvey($answersurveyinput: AnswersInput!) {
    answerSurvey(answersurveyinput: $answersurveyinput)
  }
`;

export async function answerSurvey(surveyId: number, answers: { questionId: number; answer: any }[]) {
  const formattedAnswers = answers.map((a) => ({
    questionId: a.questionId,
    answer: JSON.stringify(Array.isArray(a.answer) ? a.answer : [a.answer]),
  }));

  const response = await client.mutate({
    mutation: AnswerSurvey,
    variables: {
      answersurveyinput: {
        surveyId,
        answers: formattedAnswers,
      },
    },
  });

  return response.data;
}