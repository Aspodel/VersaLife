import { IDTO } from "./dto";

export interface IUser extends IDTO<string> {
  name?: string;
  avatarUrl?: string;
  email?: string;
  createdAt?: Date;
}
