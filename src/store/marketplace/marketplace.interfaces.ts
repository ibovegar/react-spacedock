import { Spaceship, Upgrade } from 'models';

export default interface State {
  isLoading: boolean;
  products: (Spaceship | Upgrade)[];
  cart: (Spaceship | Upgrade)[];
  isPurchasing: boolean;
}
