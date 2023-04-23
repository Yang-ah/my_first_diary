import apiClient from "../apiClient";

export interface IExercise {
  id: string;
  month: string;
  date: number;
  exercise: boolean;
}

export const patchExercise = (body: IExercise) => {
  return apiClient.patch("/exercise", body);
};
