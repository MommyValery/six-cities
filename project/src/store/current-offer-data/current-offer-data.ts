import { createSlice } from '@reduxjs/toolkit';
import { StoreSlice } from '../../const';
import { fetchNearbyOffers, fetchOffer, fetchReviews, postComment } from '../action';
import { CurrentOfferDataState } from '../../types/state';

const initialState: CurrentOfferDataState = {
  offer: null,
  nearbyOffers: [],
  comments: [],
  isOfferLoading: false,
};

export const currentOfferDataSlice = createSlice({
  name: StoreSlice.CurrentOfferData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffer.pending, (state) => {
        state.isOfferLoading = true;
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isOfferLoading = false;
      })
      .addCase(fetchOffer.rejected, (state) => {
        state.isOfferLoading = false;
      })
      .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.comments = action.payload;
      });
  }
});
