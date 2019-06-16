import React from 'react';
import { Button } from '@material-ui/core';
import { Spaceship, Upgrade } from 'models';

interface Props {
  cart: (Spaceship | Upgrade)[];
  onRemove: (index: number) => void;
  onPurchase: () => void;
}

const Cart: React.FC<Props> = props => {
  const { cart, onRemove, onPurchase } = props;

  const isPurchasable = cart.length > 0;

  return (
    <>
      {cart.map((product, index) => (
        <div key={index}>
          {product.name}
          <Button variant="contained" onClick={() => onRemove(index)}>
            REMOVE
          </Button>
        </div>
      ))}
      <Button
        color="primary"
        disabled={!isPurchasable}
        variant="contained"
        onClick={onPurchase}
      >
        PURCHASE
      </Button>
    </>
  );
};

export default Cart;
