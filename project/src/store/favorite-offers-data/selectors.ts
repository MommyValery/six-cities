import { StoreSlice } from '../../const';
import { OfferType } from '../../types/offer';
import { State } from '../../types/state';


export const getFavoriteOffers = ({ [StoreSlice.FavoriteOffersData]: FAVORITE_OFFERS_DATA }: State) : OfferType[] => FAVORITE_OFFERS_DATA.favoriteOffers;
