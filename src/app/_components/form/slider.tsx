"use client";

// Update FormSlider component to collect selected value and pass it back to the parent component
import React, { useState } from 'react';
import { Paper, CardContent, Typography, Slider, Box } from '@mui/material';

interface FormSliderProps {
  title: string;
  max: number;
  min: number;
  step: number;
  onAnswerChange: (questionId: number, answer: number) => void;
  questionId: number;
}

export default function FormSlider({ title, max, min, step, onAnswerChange, questionId }: FormSliderProps) {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    const value = newValue as number;
    setSliderValue(value);
    onAnswerChange(questionId, value);
  };

  return (
    <Paper sx={{ marginTop: 2, marginBottom: 2, padding: 2 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" marginBottom={2}>
          <Typography variant="h6">{title}</Typography>
        </Box>
        <Box display="flex" justifyContent="center" marginBottom={2}>
          <Slider
            value={sliderValue}
            onChange={handleSliderChange}
            max={max}
            min={min}
            step={step}
            marks
            valueLabelDisplay="auto"
            sx={{ width: 300 }}
          />
        </Box>
      </CardContent>
    </Paper>
  );
}