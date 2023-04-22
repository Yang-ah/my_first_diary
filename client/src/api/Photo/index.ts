import apiClient from "../apiClient";

export interface IPhoto {
  id: string;
  month: string;
  date: number;
  file: FormData;
}

export const postPhoto = ({ id, month, date, file }: IPhoto) => {
  return apiClient.post(`/photo/${id}/${month}/${date}`, file);
};
