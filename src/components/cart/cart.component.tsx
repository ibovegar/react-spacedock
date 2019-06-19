import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { Spaceship, Upgrade } from 'models';

interface Props {
  cart: (Spaceship | Upgrade)[];
  onRemove: (index: number) => void;
  onPurchase: () => void;
}

const Cart: React.FC<Props> = props => {
  const { cart, onRemove, onPurchase } = props;

  const isPurchasable = cart.length > 0;
  const totalPrice = cart.reduce((sum, i) => {
    return sum + i.price;
  }, 0);

  return (
    <Box
      border={1}
      borderColor="grey.800"
      p={2}
      display="flex"
      flexDirection="column"
    >
      {cart.map((product, index) => (
        <div key={index}>
          {product.name}
          <Button variant="contained" onClick={() => onRemove(index)}>
            REMOVE
          </Button>
        </div>
      ))}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px={3}
        py={2}
      >
        <Typography variant="subtitle1">TOTAL PRICE</Typography>
        <Typography variant="h6">{totalPrice} $</Typography>
      </Box>
      <Button
        color="primary"
        disabled={!isPurchasable}
        variant="contained"
        onClick={onPurchase}
      >
        PURCHASE
      </Button>
    </Box>
  );
};

export default Cart;
