import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../createStore';

type user = {
  name: string;
  firstName: string;
  expiration: number;
  refreshFlag: boolean;
};

const userInitialState: user = {
  name: '',
  firstName: '',
  expiration: 0,
  refreshFlag: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    setName: (state, action: PayloadAction<{ name: string }>) => {
      state.name = action.payload.name;
    },
    setFirstName: (state, action: PayloadAction<{ firstName: string }>) => {
      state.firstName = action.payload.firstName;
    },
    setExpiration: (state, action: PayloadAction<{ expiration: number }>) => {
      state.expiration = action.payload.expiration;
    },
    setRefreshFlag: (
      state,
      action: PayloadAction<{ refreshFlag: boolean }>
    ) => {
      state.refreshFlag = action.payload.refreshFlag;
    },
  },
});

export const { setName, setFirstName, setExpiration, setRefreshFlag } =
  userSlice.actions;

export default userSlice.reducer;

export const nameState = (state: RootState) => state.userSlice.name;
export const firstNameState = (state: RootState) => state.userSlice.firstName;
export const expirationState = (state: RootState) => state.userSlice.expiration;
export const refreshFlagState = (state: RootState) =>
  state.userSlice.refreshFlag;
