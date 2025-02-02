import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box, Card, CardContent } from '@mui/material';

export default function ChartsOverviewDemo() {
  const chartSeries = [
    { data: [35, 44, 24, 34] }
  ];

  const chartXAxis = [
    { data: ['初めて', '2〜5回', '6〜10回', 'それ以上'], scaleType: 'band' as const }
  ];

  return (
    <div>
      <Box>
        <Card>
          <CardContent>
            <BarChart
              series={chartSeries}
              height={290}
              width={400}
              xAxis={chartXAxis}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}
