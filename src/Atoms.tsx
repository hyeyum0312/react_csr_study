import { atom } from 'recoil';

export interface IUser {
  id: string;
  pwd: string;
  name: string;
}

export const User = atom<IUser>({
  key: 'user',
  default: {
    id: 'admin',
    pwd: 'pw',
    name: '관리자',
  },
});

export const LoginState = atom<boolean>({
  key: 'LoginState',
  default: false,
});
