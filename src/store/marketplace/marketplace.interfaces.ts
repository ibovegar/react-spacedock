import { Spacecraft, Upgrade } from 'models';

export default interface State {
  isLoading: boolean;
  products: (Spacecraft | Upgrade)[];
  cart: (Spacecraft | Upgrade)[];
  isPurchasing: boolean;
}
