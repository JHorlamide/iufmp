export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  isAdmin: boolean;
  refreshKey: string;
}

export interface IUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
}
