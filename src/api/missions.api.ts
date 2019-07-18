import axios, { AxiosResponse } from 'axios';
import { Mission } from 'models';

const url = process.env.REACT_APP_API_URL;

export const getAll = async (): Promise<Mission[]> => {
  const response: AxiosResponse = await axios.get(`${url}/missions`);
  return response.data;
};

export const update = async (mission: Mission): Promise<any> => {
  const response: AxiosResponse = await axios.put(
    `${url}/missions/${mission.id}`,
    mission
  );
  return response;
};
