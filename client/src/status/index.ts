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

interface ITracker {
  [tracker: string]: boolean;
}

export const usernameAtom = atom({
  key: "user",
  default: "",
});

export const isLoginAtom = atom({
  key: "isLogin",
  default: false,
});

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

export interface IData {
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
  default: setInitData(),
});

// export const getDataSelector = selector<IYearData>({
//   key: "data/get",
//   get: async ({ get }) => {
//     try {
//       const { data } = await axios.get("http://localhost:4000/api/planner");
//       return data.planner;
//     } catch (err) {
//       throw err;
//     }
//   },
//   set: ({ set }, newValue) => {
//     set(dataAtom, newValue);
//   },
// });
