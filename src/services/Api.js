import axios from 'axios';

axios.defaults.baseURL = 'https://63c19918376b9b2e647fe7f8.mockapi.io/users';

export const getUsers = async (page, limit) => {
  if (page && limit) {
    const { data } = await axios.get(`?limit=${limit}&page=${page}`);
    return data;
  } else {
    const { data } = await axios.get();
    return data.length;
  }
};
