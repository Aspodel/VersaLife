import React from 'react';
import { api } from 'src/configs/axios';
import { ICredential, ILoginDTO, IRegisterDTO } from 'src/interfaces/auth';
import { USER_CREDENTIAL } from 'src/utils/constant';

export interface IAuthServiceModel {
  credential?: ICredential;
  login: (dto: ILoginDTO) => Promise<void>;
  register: (dto: IRegisterDTO) => Promise<void>;
  logout: () => void;
}

export function AuthService(): IAuthServiceModel {
  const controllerPath = 'Authentication';
  const [credential, setCredential] = React.useState(
    getUserCredentialFromStorage()
  );

  function setNewCredentialInfor(newCredential?: ICredential) {
    saveCredentialToStorage(newCredential);
    setCredential(newCredential);
  }

  async function login(dto: ILoginDTO) {
    const response = await api.post(`${controllerPath}/login`, dto);
    setNewCredentialInfor(response.data);
    return response.data;
  }

  async function register(model: IRegisterDTO) {
    const response = await api.post(`${controllerPath}/register`, model);
    return response.data;
  }

  async function logout() {
    setNewCredentialInfor(undefined);
  }

  return { credential, login, register, logout };
}

function getUserCredentialFromStorage(): ICredential | undefined {
  const credential = localStorage.getItem(USER_CREDENTIAL);
  return credential ? JSON.parse(credential) : undefined;
}

function saveCredentialToStorage(credential?: ICredential) {
  credential
    ? localStorage.setItem(USER_CREDENTIAL, JSON.stringify(credential))
    : localStorage.removeItem(USER_CREDENTIAL);
}
