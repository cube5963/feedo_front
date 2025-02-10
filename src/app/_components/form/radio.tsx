"use client";

import React, { useState } from 'react';
import { Paper, CardContent, Typography, FormControl, FormControlLabel, RadioGroup, Radio, Box, } from '@mui/material';

interface FormRadioProps {
    title: string;
    options: string[];
}

export default function FormRadio({ title, options }: FormRadioProps) {
    const [radioValue, setRadioValue] = useState('');

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioValue(event.target.value);
    };

    return (
        <Paper sx={{ marginTop: 2, marginBottom: 2, padding: 2 }}>
            <CardContent>
                <Box display="flex" justifyContent="space-between" marginBottom={2}>
                    <Typography variant="h6">
                        {title}
                    </Typography>
                </Box>

                <FormControl fullWidth sx={{ marginBottom: 2 }}>
                </FormControl>
                <RadioGroup value={radioValue} onChange={handleRadioChange}>
                    {options.map((option, index) => (
                        <FormControlLabel
                            key={index}
                            value={`option${index + 1}`}
                            control={<Radio sx={{ transform: 'scale(1.5)' }} />}
                            label={
                                <Typography variant="body1">
                                    {option}
                                </Typography>
                            }
                        />
                    ))}
                </RadioGroup>
            </CardContent>
        </Paper>
    );
};
