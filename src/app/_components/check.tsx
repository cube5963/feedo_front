"use client";
import React, { useState } from 'react';
import { Paper, CardContent, Typography, FormControl, FormControlLabel, Checkbox, Box, Button, } from '@mui/material';


const Cheeck = () => {
    const [questionText, setQuestionText] = useState('好きな動物をすべて選択してください！');
    const [checkValue, setCheckValue] = useState('');
    const [optionCount, setOptionCount] = useState(5);

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckValue(event.target.value);
    };
    const test = [
        { option: "犬" },
        { option: "猫" },
        { option: "鳥" },
        { option: "魚" },
        { option: "爬虫類" },
    ]

    return (
        <Paper sx={{ marginTop: 2, marginBottom: 2, padding: 2 }}>
            <CardContent>
                <Box display="flex" justifyContent="space-between" marginBottom={2}>
                    <Typography variant="h6">
                        {questionText}
                    </Typography>
                </Box>

                <FormControl fullWidth sx={{ marginBottom: 2 }}>
                </FormControl>
                {Array.from({ length: optionCount }).map((_, index) => (
                    <FormControlLabel
                        key={index}
                        value={`option${index + 1}`}
                        control={<Checkbox sx={{ transform: 'scale(1.5)' }} />}
                        label={
                            <Typography variant="body1">
                                {test[index].option}
                            </Typography>
                        }
                    />
                ))}

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: 2,
                    }}
                >
                    <Button variant="outlined" color="primary">
                        前の質問へ
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            alignItems: 'right',
                        }}
                    >
                        次の質問へ
                    </Button>
                </Box>
            </CardContent>
        </Paper>
    );
};

export default Cheeck;
