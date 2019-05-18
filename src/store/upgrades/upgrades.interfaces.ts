import { IUpgrade } from 'models';

export interface State {
  readonly isLoading: boolean;
  readonly entities: IUpgrade[];
}
