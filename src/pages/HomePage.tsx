import { Box, Paper, Typography } from '@mui/material';

function HomePage(): JSX.Element {
  return (
    <Paper sx={{ display: 'grid', placeItems: 'center', height: 'calc(100vh - 4rem)' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="caption">welcome to</Typography>
        <Typography variant="h1" sx={{ fontSize: '3rem' }}>
          Widget Board
        </Typography>
      </Box>
    </Paper>
  );
}

export default HomePage;
