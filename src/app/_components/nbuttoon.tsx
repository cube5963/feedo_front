import React, { useState } from 'react';
import { Paper, CardContent, Typography, Box, Button, } from '@mui/material';
import { ThumbUp as ThumbUpIcon, ThumbDown as ThumbDownIcon } from '@mui/icons-material';

const Nbuttoon = () => {
    const [questionText, setQuestionText] = useState('猫は好きですか？');
    const [nButtonValue, setNButtonValue] = useState('');

    const handleNButtonChange = (value: string) => {
        setNButtonValue(value);
    };


    return (
        <Paper sx={{ marginTop: 2, marginBottom: 2, padding: 2 }}>
            <CardContent>
                <Box display="flex" justifyContent="space-between" marginBottom={2}>
                    <Typography variant="h6">
                        {questionText}
                    </Typography>
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
};

export default Nbuttoon;
