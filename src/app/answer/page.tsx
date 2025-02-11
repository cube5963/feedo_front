// Update Home component to pass onAnswerChange callback to each form component and collect answers
"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { getSurvey } from "../lib/api/getSurvey";
import { Container, Paper, Box, Typography } from "@mui/material";
import FormCheck from '../_components/form/check';
import FormRadio from '../_components/form/radio';
import FormSlider from '../_components/form/slider';
import FormStar from '../_components/form/star';
import FormText from '../_components/form/text';
import FormTwoChoice from '../_components/form/two_choice';

export default function Home() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  interface SurveyData {
    title: string;
    description: string;
    questions: { id: number; title: string; type: string; content: string[] }[];
  }

  const [surveyData, setSurveyData] = useState<SurveyData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [answers, setAnswers] = useState<{ questionId: number; answer: any }[]>([]);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const data = await getSurvey(Number(id));
        setSurveyData(data);
      } catch (error) {
        console.error("Error fetching survey data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleAnswerChange = (questionId: number, answer: any) => {
    setAnswers((prev) => {
      const existingAnswerIndex = prev.findIndex((a) => a.questionId === questionId);
      const formattedAnswer = JSON.stringify(Array.isArray(answer) ? answer : [answer]);
  
      if (existingAnswerIndex !== -1) {
        const updatedAnswers = [...prev];
        updatedAnswers[existingAnswerIndex].answer = formattedAnswer;
        return updatedAnswers;
      } else {
        return [...prev, { questionId, answer: formattedAnswer }];
      }
    });
  };
  

  const handleSubmit = () => {
    console.log({
      surveyId: id,
      answers: answers.map((a) => ({
        questionId: a.questionId,
        answer: a.answer,
      })),
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!surveyData) {
    return <div>No data found</div>;
  }

  return (
    <Container>
      <Box mt={4}>
        <Paper sx={{ m: 2, p: 2 }}>
          <Typography variant="h6">{surveyData.title}</Typography>
        </Paper>
        <Paper sx={{ m: 2, p: 2 }}>
          <Typography variant="body1">{surveyData.description}</Typography>
        </Paper>
        <Box>
          {surveyData.questions.map((question) => {
            switch (question.type) {
              case 'RADIO':
                return (
                  <FormRadio
                    key={question.id}
                    title={question.title}
                    options={question.content}
                    onAnswerChange={handleAnswerChange}
                    questionId={question.id}
                  />
                );
              case 'CHECKBOX':
                return (
                  <FormCheck
                    key={question.id}
                    title={question.title}
                    options={question.content}
                    onAnswerChange={handleAnswerChange}
                    questionId={question.id}
                  />
                );
              case 'SLIDER':
                const [max, min, step] = question.content.map(Number);
                return (
                  <FormSlider
                    key={question.id}
                    title={question.title}
                    max={max}
                    min={min}
                    step={step}
                    onAnswerChange={handleAnswerChange}
                    questionId={question.id}
                  />
                );
              case 'STAR_RATING':
                const [num] = question.content.map(Number);
                return (
                  <FormStar
                    key={question.id}
                    title={question.title}
                    max={num}
                    onAnswerChange={handleAnswerChange}
                    questionId={question.id}
                  />
                );
              case 'TWO_CHOICE':
                return (
                  <FormTwoChoice
                    key={question.id}
                    title={question.title}
                    onAnswerChange={handleAnswerChange}
                    questionId={question.id}
                  />
                );
              case 'TEXTBOX':
                return (
                  <FormText
                    key={question.id}
                    title={question.title}
                    onAnswerChange={handleAnswerChange}
                    questionId={question.id}
                  />
                );
              default:
                return null;
            }
          })}
        </Box>
      </Box>
      <Box mt={4} textAlign="center">
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </Box>
    </Container>
  );
}