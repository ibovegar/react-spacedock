import axios, { AxiosResponse } from 'axios';
import { IUpgrade } from 'models';

export const get = async (id: string): Promise<IUpgrade[]> => {
  const response: AxiosResponse = await axios.get(
    `http://localhost:1337/upgrades/${id}`,
  );
  return response.data.upgrades;
};
