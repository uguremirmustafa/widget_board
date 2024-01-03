import { Box, Button, Fade, Paper, Stack, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import {
  base64ToImgUrl,
  dataURLtoFile,
  downloadFile,
  getFileDetails,
} from '../../../lib/utils/base64';
import { Icon } from '@iconify/react/dist/iconify.js';
import { getColor } from '../../../components/theme/theme';
import { copyToClipboard } from '../../../lib/utils/copyToClipboard';

function ImgBase64Resolver(): JSX.Element {
  const [str, setStr] = useState('');
  const [pasteSuccessful, setPasteSuccessful] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState('');

  useEffect(() => {
    async function convert() {
      if (str) {
        try {
          const url = base64ToImgUrl(str);
          const file = await dataURLtoFile(url, 'download');
          setFile(file);
          setUrl(url);
          setPasteSuccessful(true);
        } catch (error) {
          console.error(error);
        }
      }
    }
    convert();
  }, [str]);

  function handleDownload() {
    downloadFile(url, 'download');
  }
  function restart() {
    setPasteSuccessful(false);
    setStr('');
    setUrl('');
    setFile(null);
  }

  const details = file ? getFileDetails(file) : null;

  return (
    <Stack gap={2}>
      {!pasteSuccessful ? (
        <TextField
          autoFocus
          value={str.slice(0, 10)}
          onChange={(e) => setStr(e.target.value)}
          fullWidth
          minRows={6}
          maxRows={12}
          multiline
          placeholder="Insert/paste your base64 string here..."
          InputProps={{ sx: { fontFamily: 'monospace' }, spellCheck: 'false' }}
        />
      ) : null}
      <Fade in={!!url}>
        <Paper sx={{ p: 2 }}>
          <Stack gap={2}>
            <img
              src={url}
              style={{
                width: '100%',
                height: '100%',
                maxHeight: `calc(100vh - 34rem)`,
                borderRadius: '.5rem',
                objectFit: 'contain',
                backgroundColor: getColor('bg2'),
              }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  startIcon={<Icon icon="solar:restart-bold" />}
                  color="error"
                  onClick={() => restart()}
                >
                  Restart
                </Button>
                <Button
                  startIcon={<Icon icon="solar:clipboard-broken" />}
                  color="info"
                  onClick={() => copyToClipboard(str)}
                >
                  Copy Base64
                </Button>
                <Button
                  startIcon={<Icon icon="ph:download" />}
                  color="success"
                  onClick={() => handleDownload()}
                >
                  Download
                </Button>
              </Box>
              {details && <Typography>{details.sizeInKb}</Typography>}
            </Box>
          </Stack>
        </Paper>
      </Fade>
    </Stack>
  );
}

export default ImgBase64Resolver;
