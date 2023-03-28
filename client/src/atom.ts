import { atom, selector } from "recoil";
import axios from "axios";

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

interface IYearData {
  [month: string]: IData[];
}

export const dataAtom = atom<IYearData>({
  key: "data",
  default: {},
});

export const getDataSelector = selector<IYearData>({
  key: "data/get",
  get: async ({ get }) => {
    try {
      const { data } = await axios.get("http://localhost:4000/api/planner");
      return data.planner;
    } catch (err) {
      throw err;
    }
  },
  set: ({ set }, newValue) => {
    set(dataAtom, newValue);
  },
});
