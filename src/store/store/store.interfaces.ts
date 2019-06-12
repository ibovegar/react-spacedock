import { Spaceship, Upgrade } from 'models';

export default interface State {
  readonly isLoading: boolean;
  readonly store: (Spaceship | Upgrade)[];
}
