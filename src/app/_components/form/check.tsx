"use client";

import React, { useState, useEffect } from 'react';
import { Paper, CardContent, Typography, FormControl, FormControlLabel, Checkbox, Box } from '@mui/material';

interface FormCheckProps {
  title: string;
  options: string[];
  onAnswerChange: (questionId: number, answer: string[]) => void;
  questionId: number;
}

export default function FormCheck({ title, options, onAnswerChange, questionId }: FormCheckProps) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  useEffect(() => {
    onAnswerChange(questionId, selectedOptions);
  }, [selectedOptions, questionId]);

  const handleCheckboxChange = (option: string) => {
    setSelectedOptions((prev) => {
      const newSelectedOptions = prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option];
      return newSelectedOptions;
    });
  };

  return (
    <Paper sx={{ marginTop: 2, marginBottom: 2, padding: 2 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" marginBottom={2}>
          <Typography variant="h6">{title}</Typography>
        </Box>
        <FormControl fullWidth sx={{ marginBottom: 2 }}></FormControl>
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={`option${index + 1}`}
            control={<Checkbox sx={{ transform: 'scale(1.5)' }} onChange={() => handleCheckboxChange(option)} />}
            label={<Typography variant="body1">{option}</Typography>}
          />
        ))}
      </CardContent>
    </Paper>
  );
}