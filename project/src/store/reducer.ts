//import { createReducer } from '@reduxjs/toolkit';
//import { CityType, OfferType, SortingType } from '../types/offer';
//import { AuthorizationStatus, CityLocation, Sorting, cities } from '../const';
//import { setCity, fetchOffers, setSorting, fetchUserStatus, loginAction, fetchOffer, fetchNearbyOffers, fetchReviews, postComment, logoutAction } from './action';
//import { CommentType, UserType } from '../types/reviews';

import { combineReducers } from '@reduxjs/toolkit';
import { StoreSlice } from '../const';
import { offersDataSlice } from './offers-data/offers-data';
import { userReviewSlice } from './user-review/user-review';
import { authUserProcessSlice } from './auth-user-process/auth-user-process';
import { currentOfferDataSlice } from './current-offer-data/current-offer-data';
import { favoriteOffersDataSlice } from './favorite-offers-data/favorite-offers-data';
import { PageEventsSlice } from './page-events/page-events';

//type State = {
//  city: CityType;
//  offers: OfferType[];
//  sorting: SortingType;
//  authStatus: AuthorizationStatus;
//  isOfferLoading: boolean;
//  user: UserType['email'];
//  offer: OfferType | null;
//  nearbyOffers: OfferType[];
//  comments: CommentType[];
//}

//export const InitialState : State = {
//  city: {
//    name: cities[0],
//    location: CityLocation[cities[0]],
//  },
//  offers: [],
//  sorting: Sorting.Popular,
//  authStatus: AuthorizationStatus.No_Auth,
//  isOfferLoading: false,
//  user: '',
//  offer: null,
//  nearbyOffers: [],
//  comments: [],
//};

//export const reducer = createReducer (InitialState, (builder) => {
//  builder.addCase(setCity, (state, action) => {
//    state.city = {
//      name: action.payload,
//      location: CityLocation[action.payload]
//    };
//  })
//    .addCase(fetchOffers.fulfilled, (state, action) => {
//      state.offers = action.payload;
//      state.isOfferLoading = false;
//    })
//    .addCase(fetchOffers.pending, (state) => {
//      state.isOfferLoading = true;
//    })
//    .addCase(fetchOffers.rejected, (state) => {
//      state.isOfferLoading = false;
//    })
//    .addCase(fetchOffer.pending, (state) => {
//      state.isOfferLoading = true;
//    })
//    .addCase(fetchOffer.fulfilled, (state, action) => {
//      state.offer = action.payload;
//      state.isOfferLoading = false;
//    })
//    .addCase(fetchOffer.rejected, (state) => {
//      state.isOfferLoading = false;
//    })
//    .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
//      state.nearbyOffers = action.payload;
//    })
//    .addCase(fetchReviews.fulfilled, (state, action) => {
//      state.comments = action.payload;
//    })
//    .addCase(setSorting, (state, action) => {
//      state.sorting = action.payload;
//    })
//    .addCase(fetchUserStatus.fulfilled, (state, action) => {
//      state.user = action.payload.email;
//      state.authStatus = AuthorizationStatus.Auth;
//    })
//    .addCase(fetchUserStatus.rejected, (state) => {
//      state.authStatus = AuthorizationStatus.No_Auth;
//    })
//    .addCase(loginAction.fulfilled, (state, action) => {
//      state.user = action.payload;
//      state.authStatus = AuthorizationStatus.Auth;
//    })
//    .addCase(loginAction.rejected, (state) => {
//      state.authStatus = AuthorizationStatus.No_Auth;
//    })
//    .addCase(logoutAction.fulfilled, (state) => {
//      state.authStatus = AuthorizationStatus.No_Auth;
//    })
//    .addCase(postComment.fulfilled, (state, action) => {
//      state.comments = action.payload;
//    });
//});

export const reducer = combineReducers({
  [StoreSlice.OffersData]: offersDataSlice.reducer,
  [StoreSlice.User]: authUserProcessSlice.reducer,
  [StoreSlice.CurrentOfferData]: currentOfferDataSlice.reducer,
  [StoreSlice.FavoriteOffersData]: favoriteOffersDataSlice.reducer,
  [StoreSlice.Page]: PageEventsSlice.reducer,
  [StoreSlice.UserReview]: userReviewSlice.reducer,
});
