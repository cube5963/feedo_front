"use client";

import React, { useState } from 'react';
import { Paper, CardContent, Typography, Rating, Box } from '@mui/material';

interface FormStarProps {
  title: string;
  max: number;
  onAnswerChange: (questionId: number, answer: number) => void;
  questionId: number;
}

export default function FormStar({ title, max, onAnswerChange, questionId }: FormStarProps) {
  const [starValue, setStarValue] = useState(0);

  const handleStarChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
    const value = newValue as number;
    setStarValue(value);
    onAnswerChange(questionId, value);
  };

  return (
    <Paper sx={{ marginTop: 2, marginBottom: 2, padding: 2 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" marginBottom={2}>
          <Typography variant="h6">{title}</Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Rating
            value={starValue}
            onChange={handleStarChange}
            max={max}
            size="large"
            sx={{ alignItems: 'center' }}
          />
        </Box>
      </CardContent>
    </Paper>
  );
}