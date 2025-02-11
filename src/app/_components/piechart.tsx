import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Card, CardContent } from '@mui/material';

interface PieData {
    title: string;
    label: string[];
    value: number[];
}

export default function BasicPie({ data }: { data: PieData }) {
    const sortedData = data.label.map((label, index) => ({ label, value: data.value[index] })).sort((a, b) => b.value - a.value || a.label.localeCompare(b.label));
    const pieSeries = [
        {
            data: sortedData.map((item, index) => ({ id: index, value: item.value, label: item.label })),
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
