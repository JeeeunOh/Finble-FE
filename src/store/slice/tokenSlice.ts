import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../createStore';

type token = {
  token: string;
  refreshToken: string;
};

const tokenInitialState: token = {
  token: '',
  refreshToken: '',
};

const tokenSlice = createSlice({
  name: 'token',
  initialState: tokenInitialState,
  reducers: {
    setToken: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
    },
    setRefreshToken: (
      state,
      action: PayloadAction<{ refreshToken: string }>
    ) => {
      state.refreshToken = action.payload.refreshToken;
    },
  },
});

export const { setToken, setRefreshToken } = tokenSlice.actions;

export default tokenSlice.reducer;

export const tokenState = (state: RootState) => state.tokenSlice.token;
export const refreshTokenState = (state: RootState) =>
  state.tokenSlice.refreshToken;
