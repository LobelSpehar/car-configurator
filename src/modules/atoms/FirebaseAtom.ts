import { atom } from 'recoil';

export interface DbInterface {
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

export const baseState = atom({
  key: 'baseState',
  default: [] as DbInterface[],
});
