import { Grid, Paper, Stack } from '@mui/material';
import Dropzone, { FileWithUrl } from '../../../components/dropzone/Dropzone';
import { useState } from 'react';
import ImgPreviewGallery from '../../../components/dropzone/ImgPreviewGallery';

function ImgBase64Encoder(): JSX.Element {
  const [files, setFiles] = useState<FileWithUrl[]>([]);

  return (
    <Stack gap={2}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Dropzone files={files} setFiles={setFiles} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <ImgPreviewGallery files={files} setFiles={setFiles} />
          </Paper>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default ImgBase64Encoder;
