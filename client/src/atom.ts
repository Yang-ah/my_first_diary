import { atom } from "recoil";

export const onTrackerAtom = atom({
  key: "tracker",
  default: true,
});

export const onDiaryAtom = atom({
  key: "diary",
  default: false,
});
