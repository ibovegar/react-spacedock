import { setSelectedSpacecraft } from 'store/spaceships';
import { getAvailableUpgrades } from 'store/upgrades';
import { AppState } from 'store';
import { ISpaceship, IAvailableUpgrades } from 'models';
import { RouteComponentProps } from 'react-router-dom';

export interface IStateProps {
  spacecraft: ISpaceship;
  upgrades: IAvailableUpgrades;
}

export interface IDispatchProps {
  setSelectedSpacecraft: (id: string) => void;
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
  setSelectedSpacecraft
};
