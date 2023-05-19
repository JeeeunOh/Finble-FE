import { Cookies } from 'react-cookie';
import { SetOption } from 'cookies';

const cookies = new Cookies();

export const setCookie = (name: string, value: string, option?: SetOption) => {
  return cookies.set(name, value, { ...option });
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};
