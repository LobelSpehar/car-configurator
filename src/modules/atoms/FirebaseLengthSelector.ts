import { selector } from 'recoil';
import { baseState } from 'modules/atoms/Index';


export const baseLengthState = selector({
    key: 'baseLengthState',
    get: ({ get }) => {
        const base = get(baseState);
        return base.length;
    },
});