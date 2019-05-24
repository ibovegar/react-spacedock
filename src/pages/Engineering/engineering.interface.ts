import { RouteComponentProps } from 'react-router-dom';
import { ISpaceship } from 'models';
import {
  loadSpacecrafts,
  getAllSpaceships,
  setSelectedSpacecraft
} from 'store/spaceships';
import { loadInventory } from 'store/upgrades';
import { AppState } from 'store';

export interface IStateProps extends RouteComponentProps {
  isLoadingSpaceships: boolean;
  isLoadingUpgrades: boolean;
  spacecrafts: ISpaceship[];
}

export interface IDispatchProps {
  setSelectedSpacecraft: (id: string) => void;
  loadSpacecrafts: () => void;
  loadInventory: () => void;
}

export type IProps = IStateProps & IDispatchProps;

export const mapStateToProps = (state: AppState) => ({
  isLoadingSpacerafts: state.spaceships.isLoading,
  isLoadingUpgrades: state.upgrades.isLoading,
  spacecrafts: getAllSpaceships(state)
});

export const mapDispatchToProps = {
  loadInventory,
  loadSpacecrafts,
  setSelectedSpacecraft
};
