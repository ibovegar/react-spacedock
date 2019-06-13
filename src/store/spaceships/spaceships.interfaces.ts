import { Spaceship, EntityState } from 'models';

export default interface State extends EntityState<Spaceship> {
  isLoading: boolean;
  selected?: Spaceship;
}
