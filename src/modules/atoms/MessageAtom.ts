import { atom } from "recoil";

type AtomObject = {
    state: boolean,
    info?: string
};

export const message = atom<AtomObject>({
    key: "message",
    default: {
        state: false,
    },
});