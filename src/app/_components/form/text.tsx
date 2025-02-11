// Update FormText component to collect entered text and pass it back to the parent component
import React, { useState } from 'react';
import { Paper, CardContent, Typography, TextField, Box } from '@mui/material';

interface FormTextProps {
  title: string;
  onAnswerChange: (questionId: number, answer: string) => void;
  questionId: number;
}

export default function FormText({ title, onAnswerChange, questionId }: FormTextProps) {
  const [textValue, setTextValue] = useState('');

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTextValue(value);
    onAnswerChange(questionId, value);
  };

  return (
    <Paper sx={{ marginTop: 2, marginBottom: 2, padding: 2 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" marginBottom={2}>
          <Typography variant="h6">{title}</Typography>
        </Box>
        <Box display="flex" justifyContent="center" marginBottom={2}>
          <TextField
            label="ここに記入してください"
            fullWidth
            multiline
            rows={4}
            value={textValue}
            onChange={handleTextChange}
          />
        </Box>
      </CardContent>
    </Paper>
  );
}