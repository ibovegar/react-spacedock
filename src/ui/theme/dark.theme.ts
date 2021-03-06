import { createMuiTheme } from '@material-ui/core';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';
import { Overrides } from '@material-ui/core/styles/overrides';
import createSpacing, { Spacing } from '@material-ui/core/styles/createSpacing';
// import { ThemeStyle } from '@material-ui/core/styles/createTypography';

const spacing: Spacing = createSpacing(4);

// const typography: ThemeStyle = {
//   h1: {
//     fontSize: '2rem'
//   }
// };

const palette: PaletteOptions = {
  type: 'dark',
  primary: {
    light: '#ff6b60',
    main: '#f44336', // AppBar
    dark: '#c42115',
    contrastText: '#fff'
  },
  secondary: {
    light: '#f4c5c2', // progress light red
    main: '#f44336', // progress red
    dark: '#',
    contrastText: '#000'
  },
  grey: {
    50: '#141d29',
    100: '#151e2a',
    200: '#16212e',
    300: '#182330',
    400: '#1a2532',
    500: '#1f2936',
    600: '#202b37',
    700: '#26313d',
    800: '#2e3843',
    900: '#3b444f',
    A100: '#444d57',
    A200: '#515963',
    A400: '#606770',
    A700: '#81878e'
  },
  // text: {
  //   primary: 'rgba(0, 0, 0, 0.87)',
  //   secondary: 'rgba(0, 0, 0, 0.54)',
  //   disabled: 'rgba(0, 0, 0, 0.38)',
  //   hint: 'rgba(0, 0, 0, 0.38)'
  // },
  background: {
    paper: 'rgba(21,30,42, 0.9)', // '#16212e',
    default: '#13161f'
  },
  common: {
    black: '#000',
    white: '#fff'
  },
  action: {
    hover: '#2e3843',
    selected: '#19385b',
    disabledBackground: '#3b444f'
  }
};

const overrides: Overrides = {
  MuiCard: {
    root: {
      // boxShadow: 'none'
    }
  },
  MuiAppBar: {
    root: {
      boxShadow: 'none'
    }
  },
  MuiButton: {
    root: {
      // boxShadow: 'none',
      borderRadius: 2,
      clipPath: `polygon(
        0 0, 0 0, /* top-left */
        100% 0%, 100% 0, /* top-right */ 
        100% 100%, 100% 100%, /* bottom-right */
        10px 100%, 0% calc(100% - 10px)) /* bottom-left */`
    }
  },
  MuiLinearProgress: {
    root: {
      height: 2
    }
  },
  MuiPopover: {
    paper: {
      backgroundColor: '#202b37',
      borderRadius: '2px'
      // boxShadow: 'none'
    }
  }

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

export default createMuiTheme({
  spacing,
  palette,
  overrides,
  typography: {
    h1: {
      fontSize: '3.5rem'
    },
    h2: {
      fontSize: '2.75rem'
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 300
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 300
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 400
    },
    h6: {
      fontSize: '1rem'
    },
    subtitle1: {
      fontSize: '0.85rem'
    },
    subtitle2: {
      fontSize: '0.7rem'
    }
  }
});
