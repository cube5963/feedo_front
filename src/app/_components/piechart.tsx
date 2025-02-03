import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Card, CardContent } from '@mui/material';

export default function BasicPie() {
    const pieSeries = [
        {
            data: [
                { id: 0, value: 10, label: '非常に良い' },
                { id: 1, value: 15, label: '良い' },
                { id: 2, value: 20, label: '悪い' },
                { id: 3, value: 25, label: '非常に悪い' },
            ],
        },
    ];

    return (
        <div>
            <Card>
                <CardContent>
                    <PieChart
                        series={pieSeries}
                        width={400}
                        height={200}
                    />
                </CardContent>
            </Card>
        </div>
    );
}
