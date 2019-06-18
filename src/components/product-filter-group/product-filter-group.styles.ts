import { Theme, createStyles } from '@material-ui/core/styles';

export default ({ spacing }: Theme) =>
  createStyles({
    root: {
      padding: 14,
      paddingLeft: spacing(6)
    }
  });
