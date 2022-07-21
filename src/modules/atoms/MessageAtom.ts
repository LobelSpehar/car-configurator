import { atom } from 'recoil';

type MessageType = {
  state: boolean;
  info?: string;
};

export const message = atom<MessageType>({
  key: 'message',
  default: {
    state: false,
  },
});
