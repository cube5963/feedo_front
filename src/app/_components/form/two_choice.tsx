"use client";
// Update FormTwoChoice component to collect selected option and pass it back to the parent component
import React, { useState } from 'react';
import { Paper, CardContent, Typography, Box, Button } from '@mui/material';
import { ThumbUp as ThumbUpIcon, ThumbDown as ThumbDownIcon } from '@mui/icons-material';

interface FormTwoChoiceProps {
  title: string;
  onAnswerChange: (questionId: number, answer: string) => void;
  questionId: number;
}

export default function FormTwoChoice({ title, onAnswerChange, questionId }: FormTwoChoiceProps) {
  const [nButtonValue, setNButtonValue] = useState('');

  const handleNButtonChange = (value: string) => {
    setNButtonValue(value);
    onAnswerChange(questionId, value);
  };

  return (
    <Paper sx={{ marginTop: 2, marginBottom: 2, padding: 2 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" marginBottom={2}>
          <Typography variant="h6">{title}</Typography>
        </Box>
        <Box display="flex" justifyContent="center" gap={3} marginBottom={2}>
          <Button
            onClick={() => handleNButtonChange('like')}
            variant="contained"
            color="primary"
            sx={{
              minWidth: 100,
              height: 100,
              borderRadius: 4,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#4caf50',
            }}
          >
            <ThumbUpIcon />
          </Button>
          <Button
            onClick={() => handleNButtonChange('dislike')}
            variant="contained"
            color="secondary"
            sx={{
              minWidth: 100,
              height: 100,
              borderRadius: 4,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#f44336',
            }}
          >
            <ThumbDownIcon />
          </Button>
        </Box>
      </CardContent>
    </Paper>
  );
}