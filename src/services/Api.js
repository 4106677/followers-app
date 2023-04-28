import axios from 'axios';
// import { matchMedia } from 'helpers/matchMedia';

axios.defaults.baseURL = 'https://63c19918376b9b2e647fe7f8.mockapi.io/users';

// const limit = matchMedia();

export const getUsers = async (page, limit) => {
  // console.log(limit);
  if (page && limit) {
    const { data } = await axios.get(`?limit=${limit}&page=${page}`);
    return data;
  } else {
    const { data } = await axios.get();
    return data.length;
  }
};

// export const
