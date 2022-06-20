import { atom } from "recoil";

type AtomObject = {
    state: boolean, user: string | null,
};

export const currentUser = atom<AtomObject>({
    key: "currentUser",
    default: { state: false, user: "" },
    dangerouslyAllowMutability: true
});