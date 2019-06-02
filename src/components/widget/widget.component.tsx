import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import red from '@material-ui/core/colors/red';

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: theme.palette.grey[100]
  },
  avatar: {
    backgroundColor: red[500]
  },
  cardContent: {
    width: '100%',
    height: '100%'
  }
}));

interface IProps {
  title: string;
  subheader?: string;
}

const Widget: React.FC<IProps> = props => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title={props.title}
        subheader={props.subheader}
      />
      <CardContent className={classes.cardContent}>
        {props.children}
      </CardContent>
    </Card>
  );
};

export default Widget;
