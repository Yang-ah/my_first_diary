import apiClient from "../apiClient";

export interface ILogin {
  email: string;
  password: string;
}

export const postLogin = (body: ILogin) => {
  return apiClient.post("/login", body);
};

export const getLogin = (id: string) => {
  return apiClient.get(`/login/${id}`);
};

export interface IRegister {
  email: string;
  password: string;
  username: string;
}

export const register = (body: IRegister) => {
  return apiClient.post("/join", body);
};
