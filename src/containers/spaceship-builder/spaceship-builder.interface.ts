import { AppState } from 'store';
import {
  Spaceship,
  Upgrade,
  AvailableUpgrades,
  AttachedUpgrades
} from 'models';
import { RouteComponentProps } from 'react-router-dom';
import { setSelectedSpacecraft } from 'store/spaceships';
import {
  detachUpgrade,
  setAttachedUpgrade,
  getAvailableUpgrades,
  getAttachedUpgrades
} from 'store/upgrades';

export interface StateProps {
  spacecraft: Spaceship | any;
  availableUpgrades: AvailableUpgrades;
  attachedUpgrades: AttachedUpgrades;
}

export const mapStateToProps = (state: AppState) => ({
  spacecraft: state.spaceships.selected,
  availableUpgrades: getAvailableUpgrades(state),
  attachedUpgrades: getAttachedUpgrades(state)
});

export const mapDispatchToProps = {
  detachUpgrade,
  setAttachedUpgrade,
  setSelectedSpacecraft
};

export interface DispatchProps {
  detachUpgrade: (upgrade: Upgrade) => void;
  setAttachedUpgrade: (
    spacecraft: Spaceship,
    oldUpgrade: Upgrade,
    newUpgrade: Upgrade
  ) => void;
  setSelectedSpacecraft: (id: string) => void;
}

export interface MatchParams {
  spaceshipId: string;
}

export type Props = StateProps &
  DispatchProps &
  RouteComponentProps<MatchParams>;
