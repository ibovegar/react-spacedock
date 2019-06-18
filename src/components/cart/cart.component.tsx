import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { Spaceship, Upgrade } from 'models';
import styles from './cart.styles';

interface Props extends WithStyles<typeof styles> {
  cart: (Spaceship | Upgrade)[];
  onRemove: (index: number) => void;
  onPurchase: () => void;
}

const Cart: React.FC<Props> = props => {
  const { classes, cart, onRemove, onPurchase } = props;

  const isPurchasable = cart.length > 0;
  const totalPrice = cart.reduce((sum, i) => {
    return sum + i.price;
  }, 0);

  return (
    <div className={classes.root}>
      <div className={classes.top}>
        {cart.map((product, index) => (
          <div key={index}>
            {product.name}
            <Button variant="contained" onClick={() => onRemove(index)}>
              REMOVE
            </Button>
          </div>
        ))}
      </div>
      <div className={classes.middle}>
        <Typography variant="subtitle1">TOTAL PRICE</Typography>
        <Typography variant="h6">{totalPrice} $</Typography>
      </div>
      <Button
        className={classes.bottom}
        color="primary"
        disabled={!isPurchasable}
        variant="contained"
        onClick={onPurchase}
      >
        PURCHASE
      </Button>
    </div>
  );
};

export default withStyles(styles)(Cart);
