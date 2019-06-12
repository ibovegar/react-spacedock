import axios, { AxiosResponse } from 'axios';
import { Upgrade } from 'models';

const url = process.env.REACT_APP_API_URL;

export const get = async (): Promise<Upgrade[]> => {
  const response: AxiosResponse = await axios.get(`${url}/store`);
  return response.data;
};
