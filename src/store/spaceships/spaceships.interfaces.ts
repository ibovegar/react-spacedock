import { ISpaceship } from 'models';

export default interface State {
  readonly isLoading: boolean;
  readonly entities: ISpaceship[];
}
