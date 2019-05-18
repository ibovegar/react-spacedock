import { ISpaceship } from 'models';

export interface State {
  readonly isLoading: boolean;
  readonly entities: ISpaceship[];
}
