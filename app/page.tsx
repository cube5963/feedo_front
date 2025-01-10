import React from 'react';
import { Container, Box, Paper, Button } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <Container>
      <Box>
        <h1>FEEDO</h1>
        <p>最高のアンケートApp</p>
      </Box>
      <Box>
        <Paper elevation={3} sx={{ p: 2 }}>
          <h2>FEEDOについて</h2>
          <p>ここら辺後でバンバン書こうぜ</p>
          <p>とっとと機能作れや</p>
        </Paper>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Link href="/create" passHref>
          <Button variant="contained">
            アンケート作成ページへ
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
