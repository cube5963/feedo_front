"use client";

import React, { useState } from 'react';
import { Paper, CardContent, Typography, Rating, Box} from '@mui/material';

interface FormStarProps {
    title: string;
    max: number;
}

export default function FromStar({ title, max }: FormStarProps) {
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

                <Box display="flex" justifyContent="center">
                    <Rating
                        value={starValue}
                        onChange={(event, newValue) => handleStarChange(newValue as number)}
                        max={max}
                        size="large" // スターの大きさを大きく設定
                        sx={{ alignItems: 'center' }} // スターを中央に配置
                    />
                </Box>
            </CardContent>
        </Paper>
    );
};