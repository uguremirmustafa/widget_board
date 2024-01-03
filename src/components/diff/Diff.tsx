import DiffViewer, { DiffMethod } from 'react-diff-viewer';
import { getColor } from '../theme/theme';
import toast from 'react-hot-toast';

interface IProps {
  left: string;
  right: string;
  leftTitle: string;
  rightTitle: string;
}

function Diff(props: IProps): JSX.Element {
  const { left, right, leftTitle, rightTitle } = props;
  return (
    <div>
      <DiffViewer
        oldValue={left}
        newValue={right}
        styles={{
          variables: {
            light: {
              diffViewerBackground: getColor('bg0'),
              diffViewerTitleBackground: getColor('bg2'),
              diffViewerTitleBorderColor: getColor('bg3'),
              diffViewerTitleColor: getColor('fg2'),
              codeFoldBackground: getColor('bg1'),
              removedBackground: getColor('redDim'),
              removedColor: getColor('fg1'),
              addedBackground: getColor('aquaDim'),
              emptyLineBackground: getColor('bg2'),
              codeFoldContentColor: getColor('orange'),
              codeFoldGutterBackground: getColor('bg3'),
              gutterColor: getColor('fg2'),
              diffViewerColor: getColor('fg1'),
              removedGutterBackground: getColor('red'),
              removedGutterColor: getColor('fg0'),
              gutterBackground: getColor('bg3'),
              gutterBackgroundDark: getColor('bg0'),
              addedGutterColor: getColor('fg0'),
              addedGutterBackground: getColor('aqua'),
            },
          },
        }}
        disableWordDiff={true}
        leftTitle={leftTitle}
        rightTitle={rightTitle}
        showDiffOnly={true}
        compareMethod={DiffMethod.WORDS}
        extraLinesSurroundingDiff={5}
        renderContent={(source) => {
          return (
            <pre
              className={source?.length > 0 ? 'diff-section' : ''}
              style={{ cursor: 'pointer' }}
              onClick={() => {
                navigator.clipboard.writeText(source);
                toast.success(`copied to clipboard:\n ${source}`);
              }}
            >
              {source}
            </pre>
          );
        }}
      />
    </div>
  );
}

export default Diff;
