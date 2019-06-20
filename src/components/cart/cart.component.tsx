import React from 'react';
import { Button, Typography, Box, Divider } from '@material-ui/core';
import { Spacecraft, Upgrade } from 'models';
import { formatCurrency } from 'utils/helpers';

interface Props {
  cart: (Spacecraft | Upgrade)[];
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
        <React.Fragment key={index}>
          <Box
            display="flex"
            alignItems="center"
            p={2}
            justifyContent="space-between"
          >
            <Box flex="1">
              <Typography variant="h6">{product.name}</Typography>
            </Box>
            <Button variant="contained" onClick={() => onRemove(index)}>
              REMOVE
            </Button>
          </Box>
          <Divider />
        </React.Fragment>
      ))}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px={2}
        py={3}
      >
        <Typography variant="subtitle1">TOTAL PRICE</Typography>
        <Typography variant="h6">{formatCurrency(totalPrice)}</Typography>
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
