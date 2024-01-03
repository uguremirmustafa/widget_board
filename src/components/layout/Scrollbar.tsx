import { Box } from '@mui/material';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  height?: string;
}

function Scrollbar(props: IProps) {
  const { children, height = `calc(100vh - 15rem)` } = props;
  return (
    <Box
      className="cs"
      sx={{
        maxHeight: height,
      }}
    >
      {children}
    </Box>
  );
}

export default Scrollbar;
