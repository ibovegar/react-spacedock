import { Mission, EntityState } from 'models';

export default interface State extends EntityState<Mission> {
  isLoading: boolean;
}
