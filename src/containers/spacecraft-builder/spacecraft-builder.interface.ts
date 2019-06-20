import { AppState } from 'store';
import {
  Spacecraft,
  Upgrade,
  AvailableUpgrades,
  AttachedUpgrades
} from 'models';
import { RouteComponentProps } from 'react-router-dom';
import { setSelectedSpacecraft } from 'store/spacecrafts';
import {
  detachUpgrade,
  attachUpgrade,
  getAvailableUpgrades,
  getAttachedUpgrades
} from 'store/upgrades';

export interface StateProps {
  spacecraft?: Spacecraft;
  availableUpgrades: AvailableUpgrades;
  attachedUpgrades: AttachedUpgrades;
  detachUpgrade: (upgrade: Upgrade) => void;
  attachUpgrade: (spacecraft: Spacecraft, upgrade: Upgrade) => void;
  setSelectedSpacecraft: (id: string) => void;
}

export const mapStateToProps = (state: AppState) => ({
  spacecraft: state.spacecrafts.selected,
  availableUpgrades: getAvailableUpgrades(state),
  attachedUpgrades: getAttachedUpgrades(state)
});

export const mapDispatchToProps = {
  detachUpgrade,
  attachUpgrade,
  setSelectedSpacecraft
};

export interface MatchParams {
  spacecraftId: string;
}

export type Props = StateProps & RouteComponentProps<MatchParams>;
