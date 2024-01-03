import { Icon } from '@iconify/react/dist/iconify.js';
import { Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Page404(): JSX.Element {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom>Are you lost</Typography>
        <Link to="/">
          Go Home <Icon icon="mdi:home" />
        </Link>
      </CardContent>
    </Card>
  );
}

export default Page404;
