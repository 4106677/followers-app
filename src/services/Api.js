import axios from 'axios';

export const getAllUsers = async page => {
  const limit = 6;

  const { data } = await axios.get(
    `https://63c19918376b9b2e647fe7f8.mockapi.io/users?limit=${limit}&page=${page}`
  );
  return data;
};
