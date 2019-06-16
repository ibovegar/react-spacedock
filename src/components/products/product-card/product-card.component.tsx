import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import styles from './product-card.styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Spaceship, Upgrade } from 'models';
import { Button } from '@material-ui/core';

interface Props extends WithStyles<typeof styles> {
  product: Spaceship | Upgrade;
  onAddClick: () => void;
}

const ProductCard: React.FC<Props> = props => {
  const { product, classes, onAddClick } = props;

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image="/static/images/cards/live-from-space.jpg"
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {product.name} {product.storeType}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {product.manufacturer}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={onAddClick}
          >
            ADD
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default withStyles(styles)(ProductCard);
