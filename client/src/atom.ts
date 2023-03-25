import { atom } from "recoil";

export const onTrackerAtom = atom({
  key: "tracker",
  default: true,
});

export const thisMonthAtom = atom({
  key: "month",
  default: new Date().getMonth(),
});

interface Idata {
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

const fakeData = {
  date: 1,
  diary: "string",
  emotion: "string",
  exercise: true,
  photoUrl: "string",
  schedule: {
    plan: [],
    work: [],
  },
};

export const dataAtom = atom({
  key: "data",
  default: [],
});
/*January: [],
    February: [],
    March: [],
    April: [],
    May: [],
    June: [],
    July: [],
    August: [],
    September: [],
    October: [],
    November: [],*/
