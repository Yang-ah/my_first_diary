import { atom } from "recoil";
import { setInitData } from "./initData";

export const usernameAtom = atom({
  key: "user",
  default: "",
});

export const isLoginAtom = atom({
  key: "isLogin",
  default: false,
});

interface ITracker {
  [tracker: string]: boolean;
}
export const onTrackerAtom = atom<ITracker>({
  key: "tracker",
  default: {
    tracker: true,
    emotion: true,
    exercise: true,
    plan: true,
    work: true,
  },
});

export const thisMonthAtom = atom({
  key: "month",
  default: new Date().getMonth(),
});

export interface ISchedule {
  content: string;
  importance: number;
  time?: string;
  with?: string;
  place?: string;
}

export interface IData {
  date: number;
  diary: string;
  emotion: string;
  exercise: boolean;
  photoUrl: string;
  schedule: {
    plan: ISchedule[];
    work: ISchedule[];
  };
}

interface IYearData {
  [month: string]: IData[];
}

export const dataAtom = atom<IYearData>({
  key: "data",
  default: setInitData(),
});
