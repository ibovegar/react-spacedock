import { Theme, createStyles } from '@material-ui/core';

export default ({ palette, typography }: Theme) =>
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
        // padding: `${spacing(3)}px ${spacing(6)}px`,
        cursor: 'pointer',
        //
        '&:hover': {
          backgroundColor: palette.action.hover
        }
      },
      '& .gain': {
        backgroundColor: palette.grey[50],
        color: palette.text.primary,
        fontSize: typography.h6.fontSize
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
