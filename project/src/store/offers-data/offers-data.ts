import { createSlice } from '@reduxjs/toolkit';
import { StoreSlice } from '../../const';
import { fetchOffers } from '../action';
import { OffersDataState } from '../../types/state';

const initialState: OffersDataState = {
  isOffersDataLoading: false,
  offers: [],
};

export const offersDataSlice = createSlice({
  name: StoreSlice.OffersData,
  initialState,
  reducers: {},
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
