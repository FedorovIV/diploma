import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import AuthService from "../services/AuthService";
import { UserDTO } from "../models/UserDTO";
import { AuthResponse } from "../models/auth/AuthResponse";

interface User {
  id: string;
  email: string;
  role: UserRoles;

}

export enum UserRoles {
  ADMIN = "ROLE_ADMIN",
  USER = "ROLE_USER"
}

export interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuth: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  accessToken: localStorage.getItem("accessToken"),
  refreshToken: localStorage.getItem("refreshToken"),
  isAuth: false,
  loading: false,
  error: null,
};

interface LoginPayload {
  email: string;
  password: string;
}

export const loginUser = createAsyncThunk<
  UserDTO,
  LoginPayload,
  { rejectValue: string }
>("/rest/auth/login", async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await AuthService.logIn(email, password);
    setTokensInLocalStorage(response);
    return response.data.user;
  } catch (error) {
    return rejectWithValue(authErrorHandler(error));
  }
});

export const signUpUser = createAsyncThunk<
  UserDTO,
  LoginPayload,
  { rejectValue: string }
>("/rest/auth/register", async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await AuthService.signUp(email, password);
    setTokensInLocalStorage(response);
    return response.data.user;
  } catch (error) {
    return rejectWithValue(authErrorHandler(error));
  }
});

export const checkAuth = createAsyncThunk<
  UserDTO, 
  void, 
  { rejectValue: string } 
>(
  "/rest/auth/info", 
  async (_, { rejectWithValue }) => {
    try {
      const response = await AuthService.checkAuth();
      return response.data;
    } catch (error) {
      return rejectWithValue(authErrorHandler(error)); 
    }
  }
);

const setTokensInLocalStorage = (response: AxiosResponse<AuthResponse>) => {
  const { jwtToken: accessToken, jwtRefreshToken: refreshToken } =
    response.data;
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};

const authErrorHandler = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    if (error.response && error.response.data) {
      return error.response.data.message;
    }
    return error.message;
  } else {
    return "An unknown error occurred";
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser(state) {
      state.user = null;
      setNotAuthState(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
        setAuthState(state);
      })
      .addCase(
        loginUser.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload ?? null;
          setNotAuthState(state);
        }
      )
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
        setAuthState(state);
      })
      .addCase(
        signUpUser.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload ?? null;
          setNotAuthState(state);
        }
      )
      .addCase(checkAuth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkAuth.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
        setAuthState(state);
      })
      .addCase(
        checkAuth.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload ?? null;
          setNotAuthState(state);
        }
      );
  },
});

const setAuthState = (state: AuthState) => {
  state.accessToken = localStorage.getItem("accessToken");
  state.refreshToken = localStorage.getItem("refreshToken");
  state.isAuth = true;
};

const setNotAuthState = (state: AuthState) => {
  state.accessToken = null;
  state.refreshToken = null;
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  state.isAuth = false;
};
export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;
