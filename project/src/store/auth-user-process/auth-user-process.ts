import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, StoreSlice } from '../../const';
import { AuthUserProcessState } from '../../types/state';
import { fetchUserStatus, loginAction as loginUserAction, logoutAction } from '../action';

const initialState: AuthUserProcessState = {
  authStatus: AuthorizationStatus.No_Auth,
  user: '',
};

export const authUserProcessSlice = createSlice({
  name: StoreSlice.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUserStatus.fulfilled, (state, action) => {
        state.user = action.payload.email;
        state.authStatus = AuthorizationStatus.Auth;
      })
      .addCase(fetchUserStatus.rejected, (state) => {
        state.authStatus = AuthorizationStatus.No_Auth;
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginUserAction.rejected, (state) => {
        state.authStatus = AuthorizationStatus.No_Auth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authStatus = AuthorizationStatus.No_Auth;
        state.user = '';
      });
  }
});
