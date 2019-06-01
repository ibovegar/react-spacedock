import { ISpaceship, IUpgrade } from 'models';

export default interface State {
  readonly isLoading: boolean;
  readonly store: Array<ISpaceship | IUpgrade>;
}
