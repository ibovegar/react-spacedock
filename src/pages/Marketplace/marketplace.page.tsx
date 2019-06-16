import React from 'react';
import { connect } from 'react-redux';
import { withStyles, createStyles, WithStyles } from '@material-ui/core/styles';
import {
  loadStore,
  addToCart,
  removeFromCart,
  purchase
} from 'store/marketplace';
import { AppState } from 'store';
import { Upgrade, Spaceship, ProductFilter } from 'models';
import { Products, Cart } from 'components';
import { Grid } from '@material-ui/core';
import CategoryFilter from './category-filter/category-filter.component';
import SpacecraftFilter from './spacecraft-filter/spacecraft-filter.component';
import UpgradeFilter from './upgrade-filter/upgrade-filter.component';

const styles = () =>
  createStyles({
    grid: {
      height: '100%'
    }
  });

interface Props extends WithStyles<typeof styles> {
  products: (Spaceship | Upgrade)[];
  cart: (Spaceship | Upgrade)[];
  loadStore: () => void;
  addToCart: (product: Spaceship | Upgrade) => void;
  removeFromCart: (index: number) => void;
  purchase: () => void;
}

class Marketplace extends React.Component<Props, any> {
  componentDidMount() {
    this.props.loadStore();
  }

  handleAddToCart = (product: Spaceship | Upgrade) => {
    this.props.addToCart(product);
  };

  handleRemoveFromCart = (index: number) => {
    this.props.removeFromCart(index);
  };

  handlePurchase = () => {
    this.props.purchase();
  };

  handleCategoryFilter = (filters: ProductFilter[]) => {
    console.log('category', filters);
  };

  handleSpacecraftFilter = (filters: ProductFilter[]) => {
    console.log('spacecraft', filters);
  };

  handleUpgradeFilter = (filters: ProductFilter[]) => {
    console.log('upgrade', filters);
  };

  public render() {
    const { products, cart, classes } = this.props;

    return (
      <Grid container spacing={10} className={classes.grid}>
        <Grid item xs={2}>
          <CategoryFilter onFilterClick={this.handleCategoryFilter} />
          <SpacecraftFilter onFilterClick={this.handleSpacecraftFilter} />
          <UpgradeFilter onFilterClick={this.handleUpgradeFilter} />
        </Grid>
        <Grid item xs={7}>
          <Products onAddClick={this.handleAddToCart} products={products} />
        </Grid>
        <Grid item xs={3}>
          <Cart
            cart={cart}
            onRemove={this.handleRemoveFromCart}
            onPurchase={this.handlePurchase}
          />
        </Grid>
      </Grid>
    );
  }
}

export const mapStateToProps = (state: AppState) => ({
  products: state.marketplace.products,
  cart: state.marketplace.cart
});

export const mapDispatchToProps = {
  loadStore,
  addToCart,
  removeFromCart,
  purchase
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Marketplace)
);
