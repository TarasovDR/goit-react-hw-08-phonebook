import axios from 'axios';

axios.defaults.baseURL = `https://connections-api.herokuapp.com`;

export const userSignUp = async newUser => {
  const { data } = await axios.post('/users/signup', newUser);
  return data;
};

export const userLogIn = async user => {
  const { data } = await axios.post('/users/login', user);
  return data;
};

export const userLogOut = async () => {
  const { data } = await axios.post('/users/logout');
  return data;
};

export const currentUser = async () => {
  const { data } = await axios.get('/users/current');
  return data;
};
