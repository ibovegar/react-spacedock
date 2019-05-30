import { createMuiTheme } from '@material-ui/core';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';
import { Overrides } from '@material-ui/core/styles/overrides';
import createSpacing, { Spacing } from '@material-ui/core/styles/createSpacing';

const spacing: Spacing = createSpacing(4);

const palette: PaletteOptions = {
  type: 'dark',
  primary: {
    light: '#757ce8',
    main: '#f44336', // AppBar
    dark: '#002884',
    contrastText: '#fff'
  },
  secondary: {
    light: '#f4c5c2', // progress light red
    main: '#f44336', // progress red
    dark: '#ba000d',
    contrastText: '#000'
  },
  grey: {
    50: '#0d1f37',
    100: '#0f243f',
    200: '#122946',
    300: '#163252',
    400: '#19385b',
    500: '#1d3f64',
    600: '#1f446c',
    700: '#234b75',
    800: '#26517e',
    900: '#295786',
    A100: '#d5d5d5',
    A200: '#aaaaaa',
    A400: '#303030',
    A700: '#616161'
  },
  background: {
    paper: '#2a598a',
    default: '#0b1c33'
  },
  common: {
    black: '#000',
    white: '#fff'
  },
  action: {
    hover: '#0f243f',
    selected: '#19385b'
  }
};

const overrides: Overrides = {
  // MuiMenuItem: {
  //   root: {
  //     '&:hover': {
  //       backgroundColor: palette.grey![100]
  //     },
  //     '&$selected': {
  //       backgroundColor: palette.grey![500]
  //     }
  //   }
  // }
};

export default createMuiTheme({ spacing, palette, overrides });