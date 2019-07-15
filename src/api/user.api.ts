import axios, { AxiosResponse } from 'axios';
import { UserStats } from 'models';

const url = process.env.REACT_APP_API_URL;

export const get = async (): Promise<UserStats> => {
  const response: AxiosResponse = await axios.get(`${url}/user`);
  return response.data;
};

export const updateCredits = async (amount: number): Promise<any> => {
  const response: AxiosResponse = await axios.put(`${url}/user`, {
    credits: amount
  });
  return response;
};
