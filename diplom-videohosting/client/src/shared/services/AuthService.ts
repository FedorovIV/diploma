import { AxiosResponse } from "axios";
import $api from "../http";
import { AuthResponse } from "../models/auth/AuthResponse";
import { UserDTO } from "../models/UserDTO";

export default class AuthService {
  static async logIn(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/rest/auth/login", {
      email,
      password,
    });
  }
  static async signUp(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/rest/auth/register", {
      email,
      password,
    });
  }
  static async checkAuth(): Promise<AxiosResponse<UserDTO>> {
    return $api.get<UserDTO>("/rest/auth/info");
  }

  static async confirmEmail(confirmCode: string) {
    return $api.post<string>("/rest/auth/confirm", {
      confirmCode,
    });
  }

  static async requestNewCode() {
    return $api.get<string>("/rest/auth/reconfirm");
  }

 
}
