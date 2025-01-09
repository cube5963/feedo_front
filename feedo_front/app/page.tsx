
import React from 'react';
import { Container, Box, Paper, Button } from '@mui/material';


export default function Home() {
  return (
    <Container>
      <Box>
        <h1>FEEDO</h1>
        <p>最高のアンケートApp</p>
      </Box>
      <Box>
        <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
          <h2>FEEDOについて</h2>
          <p>ここら辺後でバンバン書こうぜ</p>
          <p>とっとと機能作れや</p>
        </Paper>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Button>
          アンケート作成ページへ
        </Button>
      </Box>
    </Container>
  );
}
