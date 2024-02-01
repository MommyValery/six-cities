import { OfferType } from '../../types/offer';
import { State } from '../../types/state';
import { createSelector } from '@reduxjs/toolkit';
import { StoreSlice } from '../../const';
import { Comparator } from '../../utils/utils';
import { getCity, getSorting } from '../page-events/selectors';


export const getOffersData = ({ [StoreSlice.OffersData]: OFFERS_DATA }: State): OfferType[] => OFFERS_DATA.offers;
export const getIsOffersDataLoading = ({ [StoreSlice.OffersData]: OFFERS_DATA }: State): boolean => OFFERS_DATA.isOffersDataLoading;


export const selectOffers = createSelector(
  [getOffersData, getCity, getSorting],
  (offers, city, sorting) => offers.filter((offer) => offer.city.name === city.name).sort(Comparator[sorting])
);
