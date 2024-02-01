import { createSlice } from '@reduxjs/toolkit';
import { StoreSlice } from '../../const';
import { FavoriteOffersDataState } from '../../types/state';
import { fetchFavoriteOffersAction } from '../action';

const initialState: FavoriteOffersDataState = {
  favoriteOffers: [],
  isFavoriteOffersDataLoading: false,
  offers: [],
  offer: null,
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
      });
    //  .addCase(postFavoriteOfferAction.fulfilled, (state, action) => {
    //    const updatedOffer = action.payload;
    //    state.offers = state.offers.map((offer) => offer.id === updatedOffer.id ? updatedOffer : offer);

    //    if (state.offer && state.offer.id === updatedOffer.id) {
    //      state.offer = updatedOffer;
    //    }

    //    if (updatedOffer.isFavorite) {
    //      state.favoriteOffers = state.favoriteOffers.concat(updatedOffer);
    //    } else {
    //      state.favoriteOffers = state.favoriteOffers.filter((favoriteOffer) => favoriteOffer.id !== updatedOffer.id);
    //    }
    //  });

  }
});
