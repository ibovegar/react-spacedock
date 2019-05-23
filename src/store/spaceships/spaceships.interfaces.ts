import { ISpaceship } from 'models';

export default interface State {
  isLoading: boolean;
  ids: string[];
  entities: any;
  selected: ISpaceship;
}
