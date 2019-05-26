import axios, { AxiosResponse } from 'axios';
import { IUpgrade } from 'models';

const url = process.env.REACT_APP_API_URL;

export const getAll = async (): Promise<IUpgrade[]> => {
  const response: AxiosResponse = await axios.get(`${url}/upgrades`);
  return response.data;
};

export const get = async (spaceshipId: string): Promise<IUpgrade[]> => {
  const response: AxiosResponse = await axios.get(
    `${url}/spaceships/${spaceshipId}/upgrades`
  );
  return response.data;
};

export const setAttachedUpgrade = async (
  spaceshipId: string,
  upgrade: IUpgrade
): Promise<void> => {
  console.log(upgrade);

  await axios.post(
    `${url}/attachedUpgrades/${spaceshipId}/attachedUpgrades/${upgrade.type}`,
    upgrade
  );
};
