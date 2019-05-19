import { IUpgrade } from 'models';

export default interface State {
  readonly isLoading: boolean;
  readonly entities: IUpgrade[];
}
