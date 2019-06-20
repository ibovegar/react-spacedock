import axios, { AxiosResponse } from 'axios';
import { Spacecraft } from 'models';

const url = process.env.REACT_APP_API_URL;

export const getAll = async (): Promise<Spacecraft[]> => {
  const response: AxiosResponse = await axios.get(`${url}/spacecrafts`);
  return response.data;
};

export const get = async (spacecraftId: string): Promise<Spacecraft> => {
  const response: AxiosResponse = await axios.get(
    `${url}/spacecrafts/${spacecraftId}`
  );
  return response.data;
};

export const post = async (spacecraft: Spacecraft): Promise<Spacecraft> => {
  const response: AxiosResponse = await axios.post(
    `${url}/spacecrafts`,
    spacecraft
  );
  return response.data;
};
