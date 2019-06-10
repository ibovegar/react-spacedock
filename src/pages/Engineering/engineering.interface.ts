import { RouteComponentProps } from 'react-router-dom';
import { ISpaceship } from 'models';
import {
  loadSpacecrafts,
  getAllSpaceships,
  setSelectedSpacecraft
} from 'store/spaceships';
import { AppState } from 'store';
import { loadAllUpgrades } from 'store/upgrades';

export interface StateProps extends RouteComponentProps {
  isLoadingSpaceships: boolean;
  isLoadingUpgrades: boolean;
  spacecrafts: ISpaceship[];
}

export const mapStateToProps = (state: AppState) => ({
  isLoadingUpgrades: state.upgrades.isLoading,
  isLoadingSpacerafts: state.spaceships.isLoading,
  spacecrafts: getAllSpaceships(state)
});

export interface DispatchProps {
  setSelectedSpacecraft: (id: string) => void;
  loadSpacecrafts: () => void;
  loadAllUpgrades: () => void;
}

export const mapDispatchToProps = {
  loadSpacecrafts,
  loadAllUpgrades,
  setSelectedSpacecraft
};

export type Props = StateProps & DispatchProps;
