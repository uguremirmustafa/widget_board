import { Box, Divider, Grid, IconButton, Typography } from '@mui/material';
import Scrollbar from '../layout/Scrollbar';
import { FileWithUrl } from './Dropzone';
import { Icon } from '@iconify/react/dist/iconify.js';
import { copyToClipboard } from '../../lib/utils/copyToClipboard';

interface IProps {
  setFiles: React.Dispatch<React.SetStateAction<FileWithUrl[]>>;
  files: FileWithUrl[];
  height?: string;
}

function ImgPreviewGallery(props: IProps): JSX.Element {
  const { setFiles, files, height = `calc(100vh - 14rem)` } = props;

  function removeFile(fileName: FileWithUrl['name']) {
    setFiles((old) => old.filter((x) => x.name !== fileName));
  }

  if (!files.length) {
    return <span>No images here...</span>;
  }

  return (
    <Scrollbar height={height}>
      <Grid container spacing={2}>
        {files.map((x) => {
          return (
            <Grid item xs={12} sm={6} xl={3} key={x.url}>
              <Box
                className="preview-img-wrapper"
                onClick={() => {
                  copyToClipboard(x.base64);
                }}
              >
                <img
                  src={x.url}
                  alt={x.name}
                  onLoad={() => {
                    URL.revokeObjectURL(x.url);
                  }}
                  className="preview-img"
                  style={{ padding: '.25rem' }}
                />
                <Divider />
                <Typography variant="body2" noWrap sx={{ p: 1 }}>
                  {x.name}
                </Typography>
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(x.name);
                  }}
                  className="remove-btn"
                  size="small"
                >
                  <Icon icon="mdi:remove" />
                </IconButton>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Scrollbar>
  );
}

export default ImgPreviewGallery;
