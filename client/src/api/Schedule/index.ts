import { ISchedule } from "./../../state";
import apiClient from "../apiClient";

/*
  content: string;
  importance: number;
  time?: string;
  with?: string;
  place?: string;
*/

export interface IScheduleBody {
  id: string;
  category: string;
  dateString: string; // "2022-02-02"
  data: ISchedule;
}

export const postSchedule = (body: IScheduleBody) => {
  return apiClient.post("/schedule", body);
};

export interface IScheduleDelete {
  id: string;
  category: string;
  month: string;
  date: number;
  index: number;
}

export const deleteSchedule = ({
  id,
  category,
  index,
  month,
  date,
}: IScheduleDelete) => {
  return apiClient.delete(
    `/schedule/${id}/${category}/${month}/${date}/${index}`
  );
};
