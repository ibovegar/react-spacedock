import axios, { AxiosResponse } from 'axios';
import { Upgrade, Spaceship } from 'models';
import { isUpgrade, isSpacecraft } from 'utils/guards';
import * as spaceshipAPI from './spaceship.api';
import * as upgradeAPI from './upgrades.api';

const url = process.env.REACT_APP_API_URL;

export const get = async (): Promise<Upgrade[]> => {
  const response: AxiosResponse = await axios.get(`${url}/store`);
  return response.data;
};

export const purchase = async (cart: (Spaceship | Upgrade)[]): Promise<any> => {
  const promises: Promise<Spaceship | Upgrade>[] = [];

  for (let product of cart) {
    if (isSpacecraft(product)) {
      promises.push(spaceshipAPI.post(product));
    }
    if (isUpgrade(product)) {
      promises.push(upgradeAPI.post(product));
    }
  }

  return Promise.all(promises);
};
