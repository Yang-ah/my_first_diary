import apiClient from "../apiClient";

/** get(/month/:id/:monthStr) */
export const getMonthData = (id: string, month: string) => {
  return apiClient.get(`/month/${id}/${month}`);
};
