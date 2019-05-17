// import axios from 'axios';
import axios, { AxiosResponse } from 'axios';
import { ISpaceship } from 'models';
// import ISpaceship from 'models/spaceship.model';
// import { environment } from '../../environments/environment';
// (`${environment.apiUrl}/movies`)

// export const getAll = (): Promise<ISpaceship[]> => {
//   return axios
//     .get('http://localhost:1337/spaceships')
//     .then((response: AxiosResponse) => response.data);
// };

export const getAll = async (): Promise<ISpaceship[]> => {
  const response: AxiosResponse = await axios.get(
    'http://localhost:1337/spaceships',
  );
  return response.data;
};
