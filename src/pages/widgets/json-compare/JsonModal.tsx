import { Button, Grid, TextField } from '@mui/material';
import { useState } from 'react';
import toast from 'react-hot-toast';

interface IProps {
  setFirstData: React.Dispatch<React.SetStateAction<string>>;
  setSecondData: React.Dispatch<React.SetStateAction<string>>;
  firstData: string;
  secondData: string;
}
function JsonModal(props: IProps): JSX.Element {
  const { firstData, secondData, setFirstData, setSecondData } = props;
  const [left, setLeft] = useState(firstData);
  const [right, setRight] = useState(secondData);
  function saveData() {
    try {
      const parsed = JSON.parse(left);
      const str = JSON.stringify(parsed, null, 2);
      setFirstData(str);
    } catch (error) {
      toast.error('cannot save, invalid json on the left pane!');
    }
    try {
      const parsed = JSON.parse(right);
      const str = JSON.stringify(parsed, null, 2);
      setSecondData(str);
    } catch (error) {
      toast.error('cannot save, invalid json on the right pane!');
    }
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TextField
          label="First file"
          value={left}
          onChange={(e) => setLeft(e.target.value)}
          fullWidth
          minRows={20}
          maxRows={25}
          multiline
          placeholder="Insert/paste your first text file here"
          sx={{ mt: 2 }}
          InputProps={{ sx: { fontFamily: 'monospace' }, spellCheck: 'false' }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          label="Second file"
          value={right}
          onChange={(e) => setRight(e.target.value)}
          fullWidth
          minRows={20}
          maxRows={25}
          multiline
          placeholder="Insert/paste your second text file here"
          sx={{ mt: 2 }}
          color="info"
          InputProps={{ sx: { fontFamily: 'monospace' }, spellCheck: 'false' }}
        />
      </Grid>
      <Grid item xs={12}>
        <Button fullWidth onClick={saveData}>
          Save
        </Button>
      </Grid>
    </Grid>
  );
}

export default JsonModal;
