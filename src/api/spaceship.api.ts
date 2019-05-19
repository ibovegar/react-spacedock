import axios, { AxiosResponse } from 'axios';
import { ISpaceship } from 'models';

const url = process.env.REACT_APP_API_URL;

export const getAll = async (): Promise<ISpaceship[]> => {
  const response: AxiosResponse = await axios.get(`${url}/spaceships`);
  return response.data;
};

export const get = async (spaceshipId: string): Promise<ISpaceship> => {
  const response: AxiosResponse = await axios.get(
    `${url}/upgrades/${spaceshipId}`
  );
  return response.data.upgrades;
};

// export const getAll = (): Promise<ISpaceship[]> => {
//   return axios
//     .get('http://localhost:1337/spaceships')
//     .then((response: AxiosResponse) => response.data);
// };
