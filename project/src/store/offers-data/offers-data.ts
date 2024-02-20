import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreSlice } from '../../const';
import { fetchOffers } from '../action';
import { OffersDataState } from '../../types/state';
import { FavoriteAuth } from '../../types/offer';

const initialState: OffersDataState = {
  isOffersDataLoading: false,
  offers: [],
};

export const offersDataSlice = createSlice({
  name: StoreSlice.OffersData,
  initialState,
  reducers: {
    updateFavoriteOffer: (state, action: PayloadAction<FavoriteAuth>) => {
      const currentOfferIndex = state.offers.findIndex(
        (offer) => offer.id === action.payload.id
      );

      if (currentOfferIndex !== -1) {
        state.offers[currentOfferIndex].isFavorite = Boolean(
          action.payload.status
        );
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffers.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.isOffersDataLoading = false;
      });
  }
});

export const { updateFavoriteOffer } = offersDataSlice.actions;
