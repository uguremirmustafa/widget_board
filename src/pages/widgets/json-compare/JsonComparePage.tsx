import Scrollbar from '../../../components/layout/Scrollbar';
import Diff from '../../../components/diff/Diff';
import { useModal } from '../../../context/ModalContext';
import { Box, Button, Stack } from '@mui/material';
import { Icon } from '@iconify/react/dist/iconify.js';
import JsonModal from './JsonModal';
import useLocalState from '../../../hooks/useLocalState';

function JsonComparePage(): JSX.Element {
  const [firstData, setFirstData] = useLocalState('json-compare-first', '');
  const [secondData, setSecondData] = useLocalState('json-compare-second', '');
  const { openModal } = useModal();
  const firstString = firstData;
  const secondString = secondData;
  return (
    <Stack gap={2}>
      <Box>
        <Button
          startIcon={<Icon icon="ph:upload" />}
          onClick={() =>
            openModal({
              body: (
                <JsonModal
                  firstData={firstData}
                  secondData={secondData}
                  setFirstData={setFirstData}
                  setSecondData={setSecondData}
                />
              ),
              title: 'Insert/Upload Json content',
              size: 'lg',
            })
          }
        >
          Edit Files
        </Button>
      </Box>
      <Scrollbar>
        <Diff left={firstString} right={secondString} leftTitle="Left" rightTitle="Right" />
      </Scrollbar>
    </Stack>
  );
}

export default JsonComparePage;
