import { Spacecraft, EntityState } from 'models';

export default interface State extends EntityState<Spacecraft> {
  isLoading: boolean;
  selected?: Spacecraft;
}
