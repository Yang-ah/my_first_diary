import apiClient from "../apiClient";

export interface IEmotion {
  id: string;
  month: string;
  date: number;
  emotion: string;
}

export const patchEmotion = (body: IEmotion) => {
  return apiClient.patch("/emotion", body);
};
