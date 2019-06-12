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

// export const getAll = (): Promise<Spaceship[]> => {
//   return axios
//     .get('http://localhost:1337/spaceships')
//     .then((response: AxiosResponse) => response.data);
// };
