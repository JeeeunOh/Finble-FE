import { configureStore } from '@reduxjs/toolkit';
import tokenSlice from './slice/tokenSlice';
import userSlice from './slice/userSlice';

const store = configureStore({
  reducer: { userSlice: userSlice, tokenSlice: tokenSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
