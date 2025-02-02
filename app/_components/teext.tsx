import React, { useState } from 'react';
import { Paper, CardContent, Typography, TextField, Box, Button, } from '@mui/material';


const Teext = () => {
    const [questionText, setQuestionText] = useState('ここが質問内容になる');

    return (
        <Paper sx={{ marginTop: 2, marginBottom: 2, padding: 2 }}>
            <CardContent>
                <Box display="flex" justifyContent="space-between" marginBottom={2}>
                    <Typography variant="h6">
                        {questionText}
                    </Typography>
                </Box>

                <Box display="flex" justifyContent="center" marginBottom={2}>
                    <TextField
                        label="ここに記入してください"
                        fullWidth
                        multiline
                        rows={4}
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

export default Teext;
