import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(() => ({
  card: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardContent: {
    flex: 1,
    position: 'relative'
  }
}));

interface Props {
  children: ReactNode;
}

const Widget: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { children } = props;

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>{children}</CardContent>
    </Card>
  );
};

export default Widget;
