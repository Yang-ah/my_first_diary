import apiClient from "../apiClient";

export interface IDiary {
  id: string;
  month: string;
  date: number;
  diary: string;
}

export const patchDiary = (body: IDiary) => {
  return apiClient.patch("/diary", body);
};
