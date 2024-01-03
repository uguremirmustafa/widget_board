import { Box, Paper, Typography } from '@mui/material';
import { getColor } from '../components/theme/theme';

function HomePage(): JSX.Element {
  return (
    <Paper
      sx={{
        display: 'grid',
        alignItems: 'start',
        height: 'calc(100vh - 4rem)',
        backgroundImage: `url(https://images.ctfassets.net/e5382hct74si/5RJZ0Nk5TjMNANRbNT45QD/fd02cfb50f118b444e7f2f7a4fcafe7e/KV-Dark-Bitmotif.svg)`,
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        paddingTop: '20%',
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: '8rem',
            textShadow: `6px 6px ${getColor('redDim')}`,
          }}
        >
          Widdgy
        </Typography>
        <Typography variant="subtitle1" sx={{ textShadow: `1px 1px ${getColor('redDim')}` }}>
          developer's toolbox
        </Typography>
      </Box>
    </Paper>
  );
}

export default HomePage;
