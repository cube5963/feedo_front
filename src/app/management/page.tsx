"use client";

import { Container, Box, Typography, Button, Card, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { getUserSurvey } from "../lib/api/getUserSurvey";
import SearchIcon from '@mui/icons-material/Search';

export default function Home() {
  interface SurveyData {
    id: number;
    title: string;
  }

  const [surveyData, setSurveyData] = useState<SurveyData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserSurvey("testuser");
        setSurveyData(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching survey data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Box sx={{ display: 'flex', padding: '1rem' }}>
        <TextField
          variant="outlined"
          fullWidth
          margin="normal"
          sx={{ marginBottom: 2 }}
          InputProps={{
            startAdornment: (
              <SearchIcon />
            ),
          }}
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 2, maxWidth: 2000, margin: 'auto' }}>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          作成したフォーム一覧
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginBottom: 2 }} onClick={() => window.location.href = "/management/create"}>
          新しいフォームを作成
        </Button>
        {surveyData.length > 0 ? (
          surveyData.map((survey) => (
            <Card key={survey.id} sx={{ padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 'auto', maxWidth: 350, marginBottom: 2 }}>
              <Typography variant="h5" sx={{ marginBottom: 2 }}>
                {survey.title}
              </Typography>
              <Button variant="contained" color="primary" sx={{ marginBottom: 1 }} onClick={() => window.location.href = `/answer?id=${survey.id}`}>
                プレビュー
              </Button>
              <Button variant="contained" color="secondary" onClick={() => window.location.href = `/management/answer?id=${survey.id}`}>
                解凍
              </Button>
            </Card>
          ))
        ) : (
          <Typography>Loading...</Typography>
        )}
      </Box>
    </Container>
  );
}