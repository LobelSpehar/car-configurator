import { atom } from 'recoil';

export interface ConfigInterface {
  id: string;
  name: string;
  model: string;
  color: { type: string; price: number };
  wheel: { type: string; price: number; name: string };
  interior: { type: string; price: number };
  year: string;
  date: string;
  base: number;
  total: number;
}

export const configCarAtom = atom({
  key: 'configCarAtom',
  default: {} as ConfigInterface,
});
