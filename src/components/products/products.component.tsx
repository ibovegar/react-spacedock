import React from 'react';
import { Spaceship, Upgrade } from 'models';
import ProductCard from './product-card/product-card.component';
import { Grid } from '@material-ui/core';

interface Props {
  products: (Spaceship | Upgrade)[];
  onAddClick: (product: Spaceship | Upgrade) => void;
}

const Products: React.FC<Props> = props => {
  const { products, onAddClick } = props;

  return (
    <Grid container spacing={4}>
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
