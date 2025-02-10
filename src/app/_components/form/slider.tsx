"use client";

import React, { useState } from 'react';
import { Paper, CardContent, Typography, Slider, Box } from '@mui/material';

interface FormSliderProps {
    title: string;
    max: number;
    min: number;
    step: number;
}

export default function FormSlider({ title, max, min, step }: FormSliderProps) {
    const [starValue, setStarValue] = useState(0);

    const handleStarChange = (newValue: number) => {
        setStarValue(newValue);
    };

    return (
        <Paper sx={{ marginTop: 2, marginBottom: 2, padding: 2 }}>
            <CardContent>
                <Box display="flex" justifyContent="space-between" marginBottom={2}>
                    <Typography variant="h6">
                        {title}
                    </Typography>
                </Box>

                <Box display="flex" justifyContent="center" marginBottom={2}>
                    <Slider
                        value={starValue}
                        onChange={(event, newValue) => handleStarChange(newValue as number)}
                        max={max}
                        min={min}
                        step={step}
                        marks
                        valueLabelDisplay="auto"
                        sx={{ width: 300 }} // スライダーの幅を設定
                    />
                </Box>
            </CardContent>
        </Paper>
    );
};

