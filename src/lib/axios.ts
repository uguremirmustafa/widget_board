import { default as Axios } from 'axios';

const usernameKey = 'dashboard-username';

export const getLocalUser = (): string | null => {
  if (localStorage) {
    const user = localStorage.getItem(usernameKey);
    if (user) {
      return user;
    }
    return null;
  }
  return null;
};

export const storeUser = (username: string) => {
  try {
    if (localStorage) {
      const str = JSON.stringify(username);
      localStorage.setItem(usernameKey, str);
    }
  } catch (error) {
    console.error('sth went wrong while saving username');
  }
};

const axios = Axios.create({
  baseURL: 'http://localhost:8080/v1',
  headers: {
    Authorization: `Username ${getLocalUser() ?? ''}`,
  },
});

export default axios;
