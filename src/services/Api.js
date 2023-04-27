import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getAllUsers = async () => {
  const res = await axios.get(
    'https://63c19918376b9b2e647fe7f8.mockapi.io/users'
  );
  return res;
};
