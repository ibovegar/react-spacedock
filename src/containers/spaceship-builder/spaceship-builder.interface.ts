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
  attachUpgrade,
  getAvailableUpgrades,
  getAttachedUpgrades
} from 'store/upgrades';

export interface StateProps {
  spacecraft?: Spaceship;
  availableUpgrades: AvailableUpgrades;
  attachedUpgrades: AttachedUpgrades;
  detachUpgrade: (upgrade: Upgrade) => void;
  attachUpgrade: (spacecraft: Spaceship, upgrade: Upgrade) => void;
  setSelectedSpacecraft: (id: string) => void;
}

export const mapStateToProps = (state: AppState) => ({
  spacecraft: state.spaceships.selected,
  availableUpgrades: getAvailableUpgrades(state),
  attachedUpgrades: getAttachedUpgrades(state)
});

export const mapDispatchToProps = {
  detachUpgrade,
  attachUpgrade,
  setSelectedSpacecraft
};

export interface MatchParams {
  spaceshipId: string;
}

export type Props = StateProps & RouteComponentProps<MatchParams>;
