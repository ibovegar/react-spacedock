import React from 'react';
import { Spacecraft, Upgrade } from 'models';
import ProductCard from './product-card/product-card.component';
import { Grid } from '@material-ui/core';

interface Props {
  products: (Spacecraft | Upgrade)[];
  onAddClick: (product: Spacecraft | Upgrade) => void;
}

const Products: React.FC<Props> = props => {
  const { products, onAddClick } = props;

  return (
    <Grid container spacing={6}>
      {products.map((product, index) => (
        <Grid item xs={12} key={index}>
          <ProductCard
            product={product}
            onAddClick={() => onAddClick(product)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
