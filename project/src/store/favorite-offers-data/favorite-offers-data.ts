import { createSlice } from '@reduxjs/toolkit';
import { StoreSlice } from '../../const';
import { FavoriteOffersDataState } from '../../types/state';
import { fetchFavoriteOffersAction, postFavoriteOfferAction } from '../action';

const initialState: FavoriteOffersDataState = {
  favoriteOffers: [],
  isFavoriteOffersDataLoading: false,
};

export const favoriteOffersDataSlice = createSlice({
  name: StoreSlice.FavoriteOffersData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.isFavoriteOffersDataLoading = false;
      })
      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.isFavoriteOffersDataLoading = true;
      })
      .addCase(postFavoriteOfferAction.fulfilled, (state, action) => {
        const currentFavoriteIndex = state.favoriteOffers.findIndex(
          (favorite) => favorite.id === action.payload.id
        );

        if (currentFavoriteIndex !== -1) {
          state.favoriteOffers.splice(currentFavoriteIndex, 1);
        } else {
          state.favoriteOffers.push(action.payload);
        }
      });

  }
});
