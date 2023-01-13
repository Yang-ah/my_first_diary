import { atom } from "recoil";

export const onTrackerAtom = atom({
  key: "tracker",
  default: true,
});

export const onDiaryAtom = atom({
  key: "diary",
  default: false,
});

export const onPlanAtom = atom({
  key: "plan",
  default: true,
});

export const onWorkAtom = atom({
  key: "work",
  default: true,
});

export const onLockAtom = atom({
  key: "lock",
  default: false,
});
