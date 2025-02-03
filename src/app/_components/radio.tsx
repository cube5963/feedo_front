import React, { useState } from 'react';
import { Paper, CardContent, Typography, FormControl, FormControlLabel, RadioGroup, Radio, Box, Button, } from '@mui/material';
import test from 'node:test';


const Raadio = () => {
    const [questionText, setQuestionText] = useState('一番好きなのは？');
    const [radioValue, setRadioValue] = useState('');
    const [optionCount, setOptionCount] = useState(5);

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioValue(event.target.value);
    };
    const test = [
        {option: "犬"},
        {option: "猫"},
        {option: "鳥"},
        {option: "魚"},
        {option: "爬虫類"},
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
                <RadioGroup value={radioValue} onChange={handleRadioChange}>
                    {Array.from({ length: optionCount }).map((_, index) => (
                        <FormControlLabel
                            key={index}
                            value={`option${index + 1}`}
                            control={<Radio sx={{ transform: 'scale(1.5)' }} />}
                            label={
                                <Typography variant="body1">
                                    {test[index].option}
                                </Typography>
                            }
                        />
                    ))}
                </RadioGroup>

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

export default Raadio;
