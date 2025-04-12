/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { AuthResponse } from "../models/auth/AuthResponse";


export const API_URL = import.meta.env.VITE_API_ADDRESS_KEY;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  if (localStorage.getItem("accessToken") !== null) {
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      "accessToken"
    )}`;
  }
  return config;
});

$api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 403 &&
      !originalRequest._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.post<AuthResponse>(
          `${API_URL}/rest/auth/refresh`,
          { jwtRefreshToken: localStorage.getItem("refreshToken") },
          { withCredentials: true }
        );
        localStorage.setItem("accessToken", response.data.jwtToken);
        return $api.request(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
export default $api;

/*
* Create native element for SWR
* with Axios Liblary 
*/

export const getFetcher = (url:string) => $api.get(url).then(res => res.data)
export const postFetcher = (url:string, data:any) => $api.post(url, data).then(res => res.data)
export const defaultFetcher = (url:string) => fetch(url).then((res) => res.json());


 