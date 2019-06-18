import { Theme, createStyles } from '@material-ui/core';

export default (theme: Theme) =>
  createStyles({
    root: {
      position: 'sticky',
      height: '100%',
      border: `1px solid ${theme.palette.grey[800]}`,
      padding: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column'
    },
    top: {
      flex: 1
    },
    middle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: `${theme.spacing(3)}px ${theme.spacing(2)}px`
    },
    bottom: {}
  });
