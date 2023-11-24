import { IDTO } from './dto';

export interface ILoginDTO {
  username: string;
  password: string;
}

export interface IRegisterDTO {
  username: string;
  password: string;
  email?: string;
}

export interface ICredential extends IDTO<string> {
  requestAt: Date;
  expiresAt: Date;
  accessToken: string;
  refresh_token: string;
}
