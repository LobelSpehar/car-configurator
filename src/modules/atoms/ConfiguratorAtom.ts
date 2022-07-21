import { atom } from 'recoil';

import { DbInterface } from 'modules/atoms/Index';

export const configCarAtom = atom<DbInterface>({
  key: 'configCarAtom',
  default: {
    id: '',
    data: {
      name: '',
      model: '',
      color: { type: '', price: 0 },
      wheel: { type: '', price: 0, name: '' },
      interior: { type: '', price: 0 },
      year: '',
      date: '',
      base: 0,
      total: 0,
    },
  },
});
