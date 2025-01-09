import React, { useState } from 'react';
import {
    Container,
    Box,
    TextField,
    Button,
    Paper,
    Typography
} from '@mui/material';

export default function CreatePage() {
    const [formData, setFormData] = useState({
        question: '',
        options: ['', '', '', ''],
    });

    const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, question: e.target.value });
    };

    const handleOptionChange = (index: number, value: string) => {
        const newOptions = [...formData.options];
        newOptions[index] = value;
        setFormData({ ...formData, options: newOptions });
    };

    return (
        <>
            <Container>
            <Box>
                <Typography variant="h4">アンケート作成</Typography>
                <Paper elevation={3} sx={{ p: 3, mt: 2 }}>
                    <TextField
                        label="質問を入力"
                        fullWidth
                        value={formData.question}
                        onChange={handleQuestionChange}
                        sx={{ mb: 2 }}
                    />
                    {formData.options.map((option, index) => (
                        <TextField
                            key={index}
                            label={`選択肢 ${index + 1}`}
                            fullWidth
                            value={option}
                            onChange={(e) => handleOptionChange(index, e.target.value)}
                            sx={{ mb: 2 }}
                        />
                    ))}
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                    >
                        アンケートを保存
                    </Button>
                </Paper>
            </Box>
        </Container>
        </>
    );
}
