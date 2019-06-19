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
import { Upgrade, Spaceship } from 'models';
import { Products, Cart } from 'components';
import { Grid } from '@material-ui/core';
// import CategoryFilter from './category-filter/category-filter.component';
import SpacecraftFilter from './spacecraft-filter/spacecraft-filter.component';
import StoreTypeFilter from './store-type-filter/store-type-filter.component';
import { filterObjArr } from 'utils/helpers';

const styles = () =>
  createStyles({
    grid: {
      position: 'relative'
    },
    sticky: {
      height: '100%',
      position: 'sticky',
      top: 0
    }
  });

interface Props extends WithStyles<typeof styles> {
  products: (Spaceship | Upgrade)[];
  cart: (Spaceship | Upgrade)[];
  loadStore: () => void;
  addToCart: (product: Spaceship | Upgrade) => void;
  removeFromCart: (index: number) => void;
  purchase: (cart: (Spaceship | Upgrade)[]) => void;
}

interface State {
  productTypeFilter: string[];
  spacecraftFilter: string[];
}

class Marketplace extends React.Component<Props, State> {
  state: State = {
    productTypeFilter: [],
    spacecraftFilter: []
  };

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
    this.props.purchase(this.props.cart);
  };

  handleCategoryFilter = (filters: string[]) => {
    console.log('category', filters);
  };

  handleSpacecraftFilter = (filters: string[]) => {
    this.setState({ spacecraftFilter: filters });
  };

  handleUpgradeFilter = (filters: string[]) => {
    this.setState({ productTypeFilter: filters });
  };

  public render() {
    const { products, cart, classes } = this.props;
    const { productTypeFilter, spacecraftFilter } = this.state;

    let filtered: (Spaceship | Upgrade)[] = products;
    filtered = filterObjArr(products, spacecraftFilter, 'spacecraftRegistry');
    filtered = filterObjArr(filtered, productTypeFilter, 'storeType');

    return (
      <Grid container spacing={6} className={classes.grid}>
        <Grid item xs className={classes.sticky}>
          {/* <CategoryFilter onFilterClick={this.handleCategoryFilter} /> */}
          <SpacecraftFilter onFilterClick={this.handleSpacecraftFilter} />
          <StoreTypeFilter onFilterClick={this.handleUpgradeFilter} />
        </Grid>
        <Grid item xs={8}>
          <Products onAddClick={this.handleAddToCart} products={filtered} />
        </Grid>
        <Grid item xs className={classes.sticky}>
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
