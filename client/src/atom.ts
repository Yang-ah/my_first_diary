import { atom } from "recoil";

export const onTrackerAtom = atom({
  key: "tracker",
  default: true,
});

export const thisMonthAtom = atom({
  key: "month",
  default: new Date().getMonth(),
});

interface IData {
  date: number;
  diary: string;
  emotion: string;
  exercise: boolean;
  photoUrl: string;
  schedule: {
    plan: [];
    work: [];
  };
}

export const dataAtom = atom<IData[]>({
  key: "data",
  default: [],
});
