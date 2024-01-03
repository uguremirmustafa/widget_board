import { PaletteMode, Shadows, createTheme } from '@mui/material';
import '@fontsource/poppins';

const dark = {
  bg0: '#282828',
  bg1: '#3c3836',
  bg2: '#504945',
  bg3: '#665c54',
  bg4: '#7c6f64',
  fg0: '#FBF1C7',
  fg1: '#EBDBB2',
  fg2: '#D5C4A1',
  fg3: '#BDAE93',
  fg4: '#A89984',
  red: '#cc241d',
  green: '#98971a',
  yellow: '#d799921',
  blue: '#458588',
  purple: '#B16286',
  aqua: '#689D6A',
  orange: '#D65D0E',
  redDim: '#9D0006',
  greenDim: '#79740E',
  yellowDim: '#B57614',
  blueDim: '#076678',
  purpleDim: '#8F3F71',
  aquaDim: '#427B58',
  orangeDim: '#AF3A03',
} as const;

const light = {
  bg0: '#FBF1C7',
  bg1: '#EBDBB2',
  bg2: '#D5C4A1',
  bg3: '#BDAE93',
  bg4: '#A89984',
  fg0: '#282828',
  fg1: '#3c3836',
  fg2: '#504945',
  fg3: '#665c54',
  fg4: '#7c6f64',
  red: '#cc241d',
  green: '#98971a',
  yellow: '#d799921',
  blue: '#458588',
  purple: '#B16286',
  aqua: '#689D6A',
  orange: '#D65D0E',
  redDim: '#9D0006',
  greenDim: '#79740E',
  yellowDim: '#B57614',
  blueDim: '#076678',
  purpleDim: '#8F3F71',
  aquaDim: '#427B58',
  orangeDim: '#AF3A03',
} as const;

export function getColor(colorKey: keyof typeof dark) {
  const mode = document.documentElement.getAttribute('data-theme') ?? 'dark';
  return mode === 'dark' ? dark[colorKey] : light[colorKey];
}

export const getTheme = (mode: PaletteMode) => {
  return createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: {
              main: light.blue,
            },
            secondary: {
              main: light.aqua,
            },
            divider: light.bg1,
            background: {
              default: light.bg0,
              paper: light.bg0,
            },
            text: {
              primary: light.fg1,
              secondary: light.fg2,
            },
          }
        : {
            primary: {
              main: dark.aqua,
            },
            secondary: {
              main: dark.aqua,
            },
            divider: dark.bg3,
            background: {
              default: dark.bg0,
              paper: dark.bg1,
            },
            text: {
              primary: dark.fg0,
              secondary: dark.fg1,
            },
            info: {
              main: dark.blue,
            },
            error: {
              main: dark.red,
            },
            success: {
              main: dark.green,
            },
          }),
    },
    shape: {
      borderRadius: 2,
    },
    typography: {
      fontFamily: 'Poppins',
      body1: {
        fontWeight: 400,
      },
      h1: {
        fontSize: '1.875rem',
        fontWeight: 700,
      },
      h2: {
        fontSize: '1.75rem',
        fontWeight: 700,
      },
      h5: {
        fontSize: '1.5rem',
        fontWeight: 700,
      },
      fontSize: 14,
    },
    shadows: Array(25).fill('none') as Shadows,
    components: {
      MuiTextField: {
        defaultProps: {
          variant: 'outlined',
          size: 'small',
        },
        styleOverrides: {
          root: {
            borderRadius: '0.5rem !important',
          },
        },
      },
      MuiButtonBase: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            color: mode === 'dark' ? dark.fg1 : light.fg1,
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: 'none',
          },
        },
      },
      MuiPaper: {
        defaultProps: {
          variant: 'outlined',
        },
        styleOverrides: {
          root: {
            borderRadius: '0.5rem',
          },
        },
      },
      MuiList: {
        defaultProps: {
          dense: true,
        },
      },
      MuiListItemButton: {
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            borderRadius: '0.5rem',
          },
        },
      },
      MuiListItemText: {
        styleOverrides: {
          primary: {
            fontWeight: 900,
          },
        },
      },
      MuiFormControl: {
        defaultProps: {
          size: 'small',
          fullWidth: true,
        },
      },
      MuiMenuItem: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            marginTop: '-.75rem',
          },
        },
      },
      MuiAutocomplete: {
        defaultProps: {
          size: 'small',
        },
        styleOverrides: {
          paper: {
            fontSize: '14px',
          },
          inputRoot: {
            fontSize: '14px',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              backgroundColor: light.blue,
              opacity: '0.1',
              zIndex: -1,
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            },
          },
        },
      },
      MuiOutlinedInput: {
        defaultProps: {
          notched: false,
        },
        styleOverrides: {
          root: {
            fontSize: '14px',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              backgroundColor: light.blue,
              opacity: '0.1',
              zIndex: -1,
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            },
          },
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          label: {
            fontSize: '14px',
          },
        },
      },
      MuiInputLabel: {
        defaultProps: {
          shrink: true,
        },
      },
      MuiButton: {
        defaultProps: {
          variant: 'contained',
        },
        styleOverrides: {
          root: {
            textTransform: 'none',
            color: mode === 'dark' ? dark.fg1 : light.fg1,
            borderRadius: '0.5rem !important',
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            borderRadius: '0.5rem !important',
          },
        },
      },
    },
  });
};
