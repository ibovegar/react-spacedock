import axios, { AxiosResponse } from 'axios';
import { IUpgrade } from 'models';

const url = process.env.REACT_APP_API_URL;

export const get = async (spaceshipRegistry: string): Promise<IUpgrade[]> => {
  const response: AxiosResponse = await axios.get(
    `${url}/upgrades/${spaceshipRegistry}`
  );
  return response.data.upgrades;
};

export const getInventory = async (): Promise<IUpgrade[]> => {
  const response: AxiosResponse = await axios.get(`${url}/availableUpgrades`);
  return response.data;
};
