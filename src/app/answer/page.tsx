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
import FromTwoChoice from '../_components/form/two_choice';

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
                return <FormRadio key={question.id} title={question.title} options={question.content} />;
              case 'CHECKBOX':
                return <FormCheck key={question.id} title={question.title} options={question.content} />;
              case 'SLIDER':
                const [max, min, step] = question.content.map(Number);
                return <FormSlider key={question.id} title={question.title} max={max} min={min} step={step} />;
              case 'STAR_RATING':
                const [num] = question.content.map(Number);
                return <FormStar key={question.id} title={question.title} max={num} />;
              case 'TWO_CHOICE':
                return <FromTwoChoice key={question.id} title={question.title} />;
              case 'TEXTBOX':
                return <FormText key={question.id} title={question.title} />;
              default:
                return null;
            }
          })}
        </Box>
      </Box>
    </Container>
  );
}