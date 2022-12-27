import { IUser } from "./user";

export interface IBaseResponse {
  status: string;
  message: string;
}

type IResponse = {
  accessToken: string;
  refreshToken: string;
  user: IUser;
};

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse extends IBaseResponse {
  data: IResponse;
}
