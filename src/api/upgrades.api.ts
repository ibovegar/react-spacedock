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

export const update = async (upgrade: Upgrade): Promise<any> => {
  const response: AxiosResponse = await axios.put(
    `${url}/upgrades/${upgrade.id}`,
    { ...upgrade }
  );
  return response;
};

export const post = async (upgrade: Upgrade): Promise<Upgrade> => {
  const response: AxiosResponse = await axios.post(`${url}/upgrades`, upgrade);
  return response.data;
};
