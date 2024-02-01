import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { FavoriteAuth, OfferType } from '../types/offer';
import { APIRoute, AppRoute, AuthorizationStatus, HttpCode, } from '../const';
import type { AxiosInstance, AxiosError } from 'axios';
import { CommentAuth, CommentType, UserAuth, UserType } from '../types/reviews';
import { dropToken, saveToken } from '../utils/token';
import { store } from '.';
import type { History } from 'history';
import { history } from '../utils/browser-history';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const Action = {
  SET_CITY: 'city/set',
  LOAD_OFFERS: 'offers/load',
  SET_SORTING: 'sorting/set',
  REQUIRE_AUTH: 'user/requireAuth',
  LOGIN_USER: 'user/login',
  LOGOUT: 'user/logout',
  FETCH_OFFER: 'offer/fetch',
  FETCH_NEARBY_OFFERS: 'offers/fetch-nearby',
  FETCH_REVIEWS: 'offer/fetch-reviews',
  POST_COMMENT: 'offer/post-comment',
  FETCH_FAVORITE: 'user/favorite',
  POST_FAVORITE: 'offfer/post-favorite',
};

//export const setCity = createAction<CityName>(Action.SET_CITY);
export const requireAuth = createAction<AuthorizationStatus>(Action.REQUIRE_AUTH);


export const fetchOffers = createAsyncThunk<OfferType[], undefined, {
    extra: AxiosInstance;
}
>(
  Action.LOAD_OFFERS,
  async (_, { extra: api }) => {
    const {data} = await api.get <OfferType[]>(APIRoute.Offers);
    return data;
  },
);

export const fetchFavoriteOffersAction = createAsyncThunk<OfferType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  Action.FETCH_FAVORITE,
  async (_, { extra: api }) => {
    const {data} = await api.get <OfferType[]>(APIRoute.FavoriteOffers);
    return data;
  },
);

export const postFavoriteOfferAction = createAsyncThunk<OfferType, FavoriteAuth, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
    history: History;
}>(
  Action.POST_FAVORITE,
  async ({id, status}, { dispatch, extra : api}) => {
    try {
      const { data } = await api.post<OfferType>(`${APIRoute.FavoriteOffers}/${id}/${status}`);
      dispatch(fetchFavoriteOffersAction());
      return data;
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === HttpCode.NoAuth) {
        history.push(AppRoute.Login);
      }
      return Promise.reject(error);
    }
  }
);


export const fetchOffer = createAsyncThunk<OfferType, OfferType['id'], {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
    history: History;
}>(
  Action.FETCH_OFFER,
  async (id, { extra: api}) => {
    try {
      const {data} = await api.get <OfferType>(`${APIRoute.Offers}/${id}`);
      return data;
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === HttpCode.NotFound) {
        history.push(AppRoute.NotFound);
      }
      return Promise.reject(error);
    }
  },
);

export const fetchNearbyOffers = createAsyncThunk<OfferType[], OfferType['id'], {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
    history: History;
}>(
  Action.FETCH_NEARBY_OFFERS,
  async (id, { extra: api }) => {
    const { data } = await api.get<OfferType[]>(`${APIRoute.Offers}/${id}/nearby`);
    return data;
  }
);

export const fetchReviews = createAsyncThunk<CommentType[], OfferType['id'], {
    extra: AxiosInstance;
    history: History;
    dispatch: AppDispatch;
    state: State;
}>(
  Action.FETCH_REVIEWS,
  async (id, { extra: api }) => {
    const { data } = await api.get<CommentType[]>(`${APIRoute.Comments}/${id}`);
    return data;
  });

export const postComment = createAsyncThunk<CommentType[], CommentAuth, {
    extra: AxiosInstance;
    history: History;
    dispatch: AppDispatch;
    state: State;
}>(
  Action.POST_COMMENT,
  async ({id, comment, rating}, { extra: api }) => {
    const { data } = await api.post<CommentType[]>(`${APIRoute.Comments}/${id}`, {comment, rating});
    return data;
  });

export const fetchUserStatus = createAsyncThunk<UserType, undefined, { extra: AxiosInstance}>(
  Action.REQUIRE_AUTH,
  async (_, {extra: api }) => {
    const { data } = await api.get <UserType>(APIRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<string, UserAuth, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}
>(
  Action.LOGIN_USER,
  async ({ email, password }, {extra: api}) => {
    const {data: {token}} = await api.post<UserType>(APIRoute.Login, { email, password });
    saveToken(token);
    return email;
  }
);


export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}
>(
  Action.LOGOUT,
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);
