import React, { useState } from 'react';
import { Paper, CardContent, Typography, Rating, Box, Button, } from '@mui/material';


const Steer = () => {
    const [questionText, setQuestionText] = useState('当ホテルはいかがでしたか？');
    const [starValue, setStarValue] = useState(0);
    const [optionCount, setOptionCount] = useState(5);

    const handleStarChange = (newValue: number) => {
        setStarValue(newValue);
    };

    return (
        <Paper sx={{ marginTop: 2, marginBottom: 2, padding: 2 }}>
            <CardContent>
                <Box display="flex" justifyContent="space-between" marginBottom={2}>
                    <Typography variant="h6">
                        {questionText}
                    </Typography>
                </Box>

                <Box display="flex" justifyContent="center">
                    <Rating
                        value={starValue}
                        onChange={(event, newValue) => handleStarChange(newValue as number)}
                        max={optionCount}
                        size="large" // スターの大きさを大きく設定
                        sx={{ alignItems: 'center' }} // スターを中央に配置
                    />
                </Box>

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

export default Steer;
