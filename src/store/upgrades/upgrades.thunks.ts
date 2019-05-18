import * as actions from './upgrades.actions';
import * as API from 'api/upgrades.api';
import { IUpgrade } from 'models';

export const loadUpgrades = (shipRegistry: string) => {
  return (dispatch: any) => {
    dispatch(actions.loadUpgradesRequest());

    API.get(shipRegistry)
      .then((upgrades: IUpgrade[]) => {
        dispatch(actions.loadUpgradesSuccess(upgrades));
      })
      .catch(error => {
        dispatch(actions.loadUpgradesFailure(error));
      });
  };
};
