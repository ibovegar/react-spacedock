import { getAvailableUpgrades } from 'store/upgrades';
import { AppState } from 'store';
import { ISpaceship, IAvailableUpgrades, IUpgrade } from 'models';
import { RouteComponentProps } from 'react-router-dom';
import { setActiveUpgrade } from 'store/spaceships';

export interface IStateProps {
  spacecraft: ISpaceship;
  upgrades: IAvailableUpgrades;
}

export interface IDispatchProps {
  setActiveUpgrade: (spacecraft: ISpaceship, upgrade: IUpgrade) => void;
}

export interface MatchParams {
  spaceshipId: string;
}

export type IProps = IStateProps &
  IDispatchProps &
  RouteComponentProps<MatchParams>;

export const mapStateToProps = (state: AppState) => ({
  spacecraft: state.spaceships.selected,
  upgrades: getAvailableUpgrades(state)
});

export const mapDispatchToProps = {
  setActiveUpgrade
};
