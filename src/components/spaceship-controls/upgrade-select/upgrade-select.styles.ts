import { Theme, createStyles } from '@material-ui/core';

export default ({ palette }: Theme) =>
  createStyles({
    input: {
      cursor: 'pointer',
      borderRadius: 2,
      backgroundColor: palette.grey[900],
      clipPath: `polygon(
      0 0, 0 0,                         /* top-left */
      calc(100% - 10px) 0%, 100% 10px,  /* top-right */
      100% 100%, 100% 100%,             /* bottom-right */
      10px 100%, 0% calc(100% - 10px))  /* bottom-left */`,
      //
      '&:hover': {
        backgroundColor: palette.grey[700]
      }
    },
    //
    dropdown: {
      padding: 0,
      margin: 0,
      textIndent: 0,
      listStyle: 'none',
      //
      '& li': {
        padding: 0,
        cursor: 'pointer',
        //
        '&:hover': {
          backgroundColor: palette.action.hover
        }
      }
    },
    //
    icon: {},
    //
    disabled: {
      '& $input': {
        opacity: 0.4,
        pointerEvents: 'none'
      }
    },
    //
    active: {
      '& $input': {
        backgroundColor: palette.primary.main,
        '&:hover': {
          backgroundColor: palette.primary.dark
        }
      }
    }
  });
