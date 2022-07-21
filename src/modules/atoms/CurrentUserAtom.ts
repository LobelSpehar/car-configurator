import { atom } from 'recoil';

export type UserType = boolean;

export const currentUser = atom<UserType>({
  key: 'currentUser',
  default: false,
  dangerouslyAllowMutability: true,
});
