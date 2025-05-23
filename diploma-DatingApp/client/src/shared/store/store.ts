import { makeAutoObservable } from "mobx";

import { UserDTO } from "../models/UserDTO";
import AuthService from "../services/AuthService";
import $api, { API_URL } from "../http";
import ProfileService from "../services/ProfileService";
import { ProfileDTO } from "../models/ProfileDTO";

import { UserInf } from "../models/UserInf";
import { AccessLevels } from "../accessLevel/accessLevel";
import GeneralUpdateRequest from "../models/profile/GeneralUpdateRequest";

export default class Store {
  user = {} as UserDTO;
  isAuth = false;
  userInfo = {} as UserInf;
  isConfirmEmail = false;
  isLoading = false;
  isTutorial = false;
  colorTheme = false;
  avatarURL = "";
  accessLevel: AccessLevels = AccessLevels.LEVEL0;
  isMenuOpen = false;

  /*Sign Up form*/
  signUpPassword = "";
  signUpEmail = "";
  signUpConfirmPassword = "";
  signUpConfirmLicense = false;

  setSignUpPassword (value:string) {
    this.signUpPassword = value;
  }
  setSignUpEmail (value:string) {
    this.signUpEmail = value;
  }
  setSignUpConfirmPassword (value:string) {
    this.signUpConfirmPassword = value;
  }
  setSignUpConfirmLicense(value:boolean) {
    this.signUpConfirmLicense = value;
  }

  setSignUpDefault () {
    this.signUpEmail="";
    this.signUpPassword="";
    this.signUpConfirmPassword="";
  }
  /*---------------------------------------------------*/

  constructor() {
    makeAutoObservable(this);
  }

  setMenuOpen(bool:boolean) {
    this.isMenuOpen = bool;
  }

  changeMenuOpen() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  setTutorial(bool:boolean) {
    this.isTutorial = bool;
  }

  getAvatarURL = async () => {
    try {
      this.avatarURL = (
        await $api.get(API_URL + "/photo/avatar/" + this.userInfo.username)
      ).data;
    } catch (e: any) {}
  };

  setColorTheme(bool: boolean) {
    this.colorTheme = bool;
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setConfirmEmail(bool: boolean) {
    this.isConfirmEmail = bool;
  }

  setUser(user: UserDTO) {
    this.user = user;
  }

  setUserInf(userInf: UserInf) {
    this.userInfo = userInf;
  }

  setLoading(loading: boolean) {
    this.isLoading = loading;
  }

  updateAccessLevel() {
    switch (true) {
    case !this.isAuth:
      this.accessLevel = AccessLevels.LEVEL0;
      break;
    case !this.userInfo.confirmed:
      this.accessLevel = AccessLevels.LEVEL1;
      break;
    case !this.userInfo.profileFilled:
      this.accessLevel = AccessLevels.LEVEL2;
      break;
    default:
      this.accessLevel = AccessLevels.LEVEL3;
      break;
    }

  }
  async login(email: string, password: string): Promise<any> {
    try {
      this.setLoading(true);
      const response = await AuthService.login(email, password);

      localStorage.setItem("AccessToken", response.data.jwtToken);
      localStorage.setItem("refreshToken", response.data.jwtRefreshToken);

      this.setAuth(true);
      this.setUser(response.data.user);
      this.setLoading(false);
      return "okay";
    } catch (e: any) {
      this.setLoading(false);
      return e;
    } finally {
      this.updateAccessLevel();
    }
  }

  async registration(email: string, password: string) {
    try {
      this.setLoading(true);
      const response = await AuthService.registration(email, password);

      localStorage.setItem("AccessToken", response.data.jwtToken);
      localStorage.setItem("refreshToken", response.data.jwtRefreshToken);

      this.setAuth(true);
      this.setUser(response.data.user);
      this.setLoading(false);
    } catch (e: any) {
      this.setLoading(false);
      return e;
    } finally {
      this.updateAccessLevel();
    }
  }

  async logout() {
    try {
      localStorage.removeItem("AccessToken");
      localStorage.removeItem("refreshToken");

      this.setAuth(false);
      this.setUser({} as UserDTO);
      this.accessLevel = AccessLevels.LEVEL0;
    } catch (e) {} finally {
      this.updateAccessLevel();
    }
  }

  async checkAuth() {
    try {
      const response = await AuthService.checkAuth();

      this.setUserInf(response.data);

      this.setUser({ email: response.data.username } as UserDTO);
      this.setAuth(true);
    } catch (error) {
      this.setAuth(false);
      this.setUser({} as UserDTO);
      localStorage.removeItem("AccessToken");
      localStorage.removeItem("refreshToken");
    } finally{
      this.updateAccessLevel();
    }
  }

  async confirmEmail(confirmCode: string) {
    try {
      await AuthService.confirmEmail(confirmCode);
      this.setConfirmEmail(true);
    } catch (error) {
      return error;
    } finally {
      this.updateAccessLevel();
    }
  }

  async requestNewCode() {
    try {
      await AuthService.requestNewCode();
    } catch (error) {
      return error;
    }
  }

  async fieldProfile(profileDTO: ProfileDTO) {
    try {
      await ProfileService.fieldProfile(profileDTO);
    } catch (error: any) {}
  }

  async updateField(request:GeneralUpdateRequest) {
    try {
      await ProfileService.updateField(request);
    } catch (error: any) {}
  }

  async uploadAvatar(file: any) {
    try {
      await ProfileService.uploadAvatar(file);
      this.getAvatarURL();
    } catch (error: any) {}
  }
}
