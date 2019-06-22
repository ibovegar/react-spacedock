import { Theme, createStyles } from '@material-ui/core/styles';

export default (theme: Theme) =>
  createStyles({
    card: {
      display: 'flex'
    },
    content: {
      flex: '1',
      padding: theme.spacing(8)
    },
    cover: {
      width: 320,
      height: 220
      // backgroundColor: theme.palette.grey[100]
    },
    controls: {
      // width: 140,
      padding: theme.spacing(8),
      textAlign: 'right'
    },
    divider: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(4)
    },
    playIcon: {
      height: 38,
      width: 38
    },
    img: {
      padding: 0
    },
    chip: {
      marginLeft: theme.spacing(4)
    }
  });
