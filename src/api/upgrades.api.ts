import axios, { AxiosResponse } from 'axios';
import { Upgrade } from 'models';

const url = process.env.REACT_APP_API_URL;

export const getAll = async (): Promise<Upgrade[]> => {
  const response: AxiosResponse = await axios.get(`${url}/upgrades`);
  return response.data;
};

export const get = async (spaceshipId: string): Promise<Upgrade[]> => {
  const response: AxiosResponse = await axios.get(
    `${url}/spaceships/${spaceshipId}/upgrades`
  );
  return response.data;
};

export const setAttachedUpgrade = async (
  spaceshipId: string,
  upgrade: Upgrade
): Promise<void> => {
  await axios.post(
    `${url}/attachedUpgrades/${spaceshipId}/attachedUpgrades/${upgrade.type}`,
    upgrade
  );
};
