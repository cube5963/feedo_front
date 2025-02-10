import React from 'react';
import { Paper, CardContent, Typography, TextField, Box,} from '@mui/material';

interface FromTeextProps {
    title: string;
}
export default function FormText({ title }: FromTeextProps) {
    return (
        <Paper sx={{ marginTop: 2, marginBottom: 2, padding: 2 }}>
            <CardContent>
                <Box display="flex" justifyContent="space-between" marginBottom={2}>
                    <Typography variant="h6">
                        {title}
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
            </CardContent>
        </Paper>
    );
};