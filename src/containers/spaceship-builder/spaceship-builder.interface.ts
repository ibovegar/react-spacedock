import { AppState } from 'store';
import {
  ISpaceship,
  IUpgrade,
  IAvailableUpgrades,
  IAttachedUpgrades
} from 'models';
import { RouteComponentProps } from 'react-router-dom';
import { setSelectedSpacecraft } from 'store/spaceships';
import {
  setAttachedUpgrade,
  getAvailableUpgrades,
  getAttachedUpgrades
} from 'store/upgrades';

export interface IStateProps {
  spacecraft: ISpaceship;
  availableUpgrades: IAvailableUpgrades;
  attachedUpgrades: IAttachedUpgrades;
}

export const mapStateToProps = (state: AppState) => ({
  spacecraft: state.spaceships.selected,
  availableUpgrades: getAvailableUpgrades(state),
  attachedUpgrades: getAttachedUpgrades(state)
});

export interface IDispatchProps {
  setAttachedUpgrade: (
    spacecraft: ISpaceship,
    oldUpgrade: IUpgrade,
    newUpgrade: IUpgrade
  ) => void;
  setSelectedSpacecraft: (id: string) => void;
}

export const mapDispatchToProps = {
  setAttachedUpgrade,
  setSelectedSpacecraft
};

export interface MatchParams {
  spaceshipId: string;
}

export type IProps = IStateProps &
  IDispatchProps &
  RouteComponentProps<MatchParams>;
