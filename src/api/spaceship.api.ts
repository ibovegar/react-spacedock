import axios, { AxiosResponse } from 'axios';
import { Spaceship } from 'models';

const url = process.env.REACT_APP_API_URL;

export const getAll = async (): Promise<Spaceship[]> => {
  const response: AxiosResponse = await axios.get(`${url}/spaceships`);
  return response.data;
};

export const get = async (spaceshipId: string): Promise<Spaceship> => {
  const response: AxiosResponse = await axios.get(
    `${url}/spaceships/${spaceshipId}`
  );
  return response.data;
};

export const post = async (spaceship: Spaceship): Promise<Spaceship> => {
  const response: AxiosResponse = await axios.post(
    `${url}/spaceships`,
    spaceship
  );
  return response.data;
};
