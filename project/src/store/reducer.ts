import { combineReducers } from '@reduxjs/toolkit';
import { StoreSlice } from '../const';
import { offersDataSlice } from './offers-data/offers-data';
import { userReviewSlice } from './user-review/user-review';
import { authUserProcessSlice } from './auth-user-process/auth-user-process';
import { currentOfferDataSlice } from './current-offer-data/current-offer-data';
import { favoriteOffersDataSlice } from './favorite-offers-data/favorite-offers-data';
import { PageEventsSlice } from './page-events/page-events';

export const reducer = combineReducers({
  [StoreSlice.OffersData]: offersDataSlice.reducer,
  [StoreSlice.User]: authUserProcessSlice.reducer,
  [StoreSlice.CurrentOfferData]: currentOfferDataSlice.reducer,
  [StoreSlice.FavoriteOffersData]: favoriteOffersDataSlice.reducer,
  [StoreSlice.Page]: PageEventsSlice.reducer,
  [StoreSlice.UserReview]: userReviewSlice.reducer,
});
