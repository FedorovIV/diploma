import { configureStore } from '@reduxjs/toolkit'
import AuthController from '../auth/AuthController'

export const store = configureStore({
  reducer: {
    authController: AuthController
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch