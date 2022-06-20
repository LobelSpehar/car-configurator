import { atom } from "recoil";

type AtomObject = {
    id: string,
    name: string,
    model: string,
    color: { type: string, price: number },
    wheel: { type: string, price: number, name: string },
    interior: { type: string, price: number },
    year: string,
    date: string,
    base: number,
    total: number,
};

export const configCarAtom = atom<AtomObject>({
    key: "configCarAtom",
    default: {
        id: "1",
        name: "AUDI RS6",
        model: "RS6",
        color: { type: "Black", price: 0 },
        wheel: { type: "Two", price: 0, name: '' },
        interior: { type: "Black&grey", price: 0 },
        year: "2022",
        date: "May 22nd 2022",
        base: 100000,
        total: 100000,
    },
});