import React from 'react';
import { Container, Box, Paper, Button } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Paper sx={{ p: 4 }}>
          <h1>Welcome to the app!</h1>
          <p>
            This is a simple app that demonstrates how to use MUI with Next.js.
          </p>
          <Link href="/login">
            <Button variant="contained" color="primary">
              Login
            </Button>
          </Link>
        </Paper>
      </Box>
    </Container>
  );
}
