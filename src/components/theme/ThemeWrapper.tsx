import { CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';

import { createContext, useContext, useState, useMemo, ReactNode, useEffect } from 'react';
import { getTheme } from './theme';

interface InitialValues {
  mode: PaletteMode;
  setMode: React.Dispatch<React.SetStateAction<PaletteMode>>;
}

const initialValues: InitialValues = {
  mode: 'dark',
  setMode: () => {},
};

const Context = createContext<InitialValues>(initialValues);

interface IProps {
  children: ReactNode;
}

export const ThemeWrapper = (props: IProps) => {
  const { children } = props;
  const [mode, setMode] = useState(initialValues.mode);

  useEffect(() => {
    if (window) {
      const html = document.documentElement;
      html.setAttribute('data-theme', mode);
    }
  }, [mode]);

  const contextValue = useMemo(
    () => ({
      mode,
      setMode,
    }),
    [mode, setMode]
  );

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <Context.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Context.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(Context);

  return context;
};
