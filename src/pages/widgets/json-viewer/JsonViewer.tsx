/* eslint-disable @typescript-eslint/no-explicit-any */
import Scrollbar from '../../../components/layout/Scrollbar';
import ReactJson from 'react-json-view';
import { getColor } from '../../../components/theme/theme';
import { Box, Button, Grid, Stack, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Icon } from '@iconify/react/dist/iconify.js';
import useLocalState from '../../../hooks/useLocalState';

function JsonViewer(): JSX.Element {
  const [text, setText] = useLocalState('json-view-text', '');
  const [parsedJson, setParsedJson] = useState({});
  useEffect(() => {
    try {
      const parsed = JSON.parse(text);
      setParsedJson(parsed);
    } catch (error) {
      console.error('error while parsing...');
    }
  }, [text]);

  function beautify() {
    try {
      const parsed = JSON.parse(text);
      const str = JSON.stringify(parsed, null, 4);
      setText(str);
      setParsedJson(parsed);
    } catch (error) {
      toast.error('error while beautifying...');
    }
  }

  function copyToClipboard() {
    const parsed = JSON.parse(text);
    const str = JSON.stringify(parsed, null, 4);
    navigator.clipboard.writeText(str);
    toast.success('copied to clipboard...');
  }

  function clear() {
    setText('');
    setParsedJson({});
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Stack gap={2}>
          <Scrollbar>
            <TextField
              spellCheck="false"
              placeholder="Insert your JSON here..."
              onChange={(e) => {
                setText(e.target.value);
              }}
              multiline
              sx={{
                width: '100%',
              }}
              value={text}
              InputProps={{
                sx: { fontSize: '1rem', fontFamily: 'monospace' },
                minRows: 20,
                maxRows: 25,
              }}
            />
          </Scrollbar>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              startIcon={<Icon icon="solar:clipboard-broken" />}
              onClick={copyToClipboard}
              color="info"
              fullWidth
            >
              copy
            </Button>
            <Button fullWidth startIcon={<Icon icon="solar:code-bold" />} onClick={beautify}>
              beautify
            </Button>
            <Button
              fullWidth
              startIcon={<Icon icon="ant-design:clear-outlined" />}
              onClick={clear}
              color="error"
            >
              clear
            </Button>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Scrollbar>
          <ReactJson
            src={parsedJson}
            enableClipboard
            collapseStringsAfterLength={20}
            theme="ashes"
            iconStyle="square"
            name="data"
            quotesOnKeys={false}
            collapsed={1}
            sortKeys={true}
            displayDataTypes={false}
            style={{
              backgroundColor: getColor('bg0'),
              padding: '1rem',
            }}
            indentWidth={4}
            onEdit={(val) => {
              setText(JSON.stringify(val.updated_src, null, 2));
            }}
            onAdd={(val) => {
              setText(JSON.stringify(val.updated_src, null, 2));
            }}
            onDelete={(val) => {
              setText(JSON.stringify(val.updated_src, null, 2));
            }}
          />
        </Scrollbar>
      </Grid>
    </Grid>
  );
}

export default JsonViewer;
