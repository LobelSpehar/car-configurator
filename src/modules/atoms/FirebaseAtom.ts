import { atom, RecoilState } from 'recoil';

export type ColorTypes =
  | { type: 'Nardo Gay'; price: 400 }
  | { type: 'Tango Red'; price: 450 }
  | { type: 'Turbo Blue'; price: 500 }
  | { type: 'Pola White'; price: 550 }
  | { type: 'Ultra Blue'; price: 600 }
  | { type: 'Black'; price: 525 }
  | { type: 'Florett Silver'; price: 475 }
  | { type: 'Tactical Green'; price: 425 }
  | { type: ''; price: 0 };

export type WheelTypes =
  | { type: 'One'; price: 520; name: '22” Magnesium 5-spoke' }
  | { type: 'Two'; price: 500; name: '22” Alloy 10-spoke ' }
  | { type: 'One'; price: 480; name: '22” Magnesium 5-spoke' }
  | { type: 'Two'; price: 510; name: '22” Alloy 10-spoke ' }
  | { type: 'One'; price: 475; name: '22” Magnesium 5-spoke' }
  | { type: 'Two'; price: 515; name: '22” Alloy 5-spoke ' }
  | { type: ''; price: 0; name: '' };

export type InteriorTypes =
  | { type: 'Black&grey'; price: 1000 }
  | { type: 'Black&red'; price: 950 }
  | { type: 'Lunar Silver'; price: 1050 }
  | { type: 'Black&grey'; price: 1200 }
  | { type: 'Black&red'; price: 1150 }
  | { type: 'Brown'; price: 1100 }
  | { type: 'Black'; price: 1400 }
  | { type: 'Red'; price: 1500 }
  | { type: ''; price: 0 };

export interface DbInterface {
  id: string;
  data: {
    name: string;
    model: string;
    color: ColorTypes;
    wheel: WheelTypes;
    interior: InteriorTypes;
    year: string;
    date: string;
    base: number;
    total: number;
  };
}

export const baseState = atom<Array<DbInterface>>({
  key: 'baseState',
  default: [],
});
