import { getAvailableUpgrades } from 'store/upgrades';
import { AppState } from 'store';
import { ISpaceship, IAvailableUpgrades } from 'models';
import { RouteComponentProps } from 'react-router-dom';

export interface IStateProps {
  spacecraft: ISpaceship;
  upgrades: IAvailableUpgrades;
}

export interface MatchParams {
  spaceshipId: string;
}

export type IProps = IStateProps & RouteComponentProps<MatchParams>;

export const mapStateToProps = (state: AppState) => ({
  spacecraft: state.spaceships.selected,
  upgrades: getAvailableUpgrades(state)
});
