import { AuthorizationStatus, StoreSlice } from '../../const';
import { UserType } from '../../types/reviews';
import { State } from '../../types/state';

export const getAuthStatus = ({ [StoreSlice.User]: USER }: State): AuthorizationStatus => USER.authStatus;
export const getUser = ({ [StoreSlice.User]: USER}: State): UserType['email'] => USER.user;
