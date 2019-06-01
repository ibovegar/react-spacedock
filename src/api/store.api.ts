import axios, { AxiosResponse } from 'axios';
import { IUpgrade } from 'models';

const url = process.env.REACT_APP_API_URL;

export const get = async (): Promise<IUpgrade[]> => {
  const response: AxiosResponse = await axios.get(`${url}/store`);
  return response.data;
};
