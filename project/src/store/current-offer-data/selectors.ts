import { StoreSlice } from '../../const';
import { OfferType } from '../../types/offer';
import { CommentType } from '../../types/reviews';
import { State } from '../../types/state';


export const getOffer = ({ [StoreSlice.CurrentOfferData]: CURRENT_OFFER_DATA }: State): OfferType| null => CURRENT_OFFER_DATA.offer;
export const getNearbyOffers = ({ [StoreSlice.CurrentOfferData]: CURRENT_OFFER_DATA }: State): OfferType[] => CURRENT_OFFER_DATA.nearbyOffers;
export const getComments = ({ [StoreSlice.CurrentOfferData]: CURRENT_OFFER_DATA }: State): CommentType[] => CURRENT_OFFER_DATA.comments;
export const getIsOfferLoading = ({ [StoreSlice.CurrentOfferData]: CURRENT_OFFER_DATA }: State): boolean => CURRENT_OFFER_DATA.isOfferLoading;

