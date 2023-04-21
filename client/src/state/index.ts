import { atom } from "recoil";

const setInitData = () => {
  const thisYear = new Date().getFullYear();
  const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const result: any = {};

  months.map((month) => {
    const strMonth = new Date(thisYear, month, 1).toLocaleString("en-US", {
      month: "long",
    });
    const thisMonthEnd = new Date(thisYear, month + 1, 0).getDate();

    result[strMonth] = [];

    for (let i = 1; i <= thisMonthEnd; i++) {
      result[strMonth].push({
        date: i,
        photoUrl: "",
        diary: "",
        schedule: {
          work: [],
          plan: [],
        },
        emotion: "",
        exercise: false,
      });
    }
  });

  return result;
};

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
