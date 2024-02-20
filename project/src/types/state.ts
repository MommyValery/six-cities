import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { CityType, OfferType, SortingType } from './offer';
import { CommentType, UserType } from './reviews';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type CurrentOfferDataState = {
    isOfferLoading: boolean;
    offer: OfferType | null;
    nearbyOffers: OfferType[];
    comments: CommentType[];
}

export type AuthUserProcessState = {
  authStatus: AuthorizationStatus;
  user: UserType['email'];
}

export type FavoriteOffersDataState = {
    favoriteOffers: OfferType[];
    isFavoriteOffersDataLoading: boolean;

}

export type ProcessSliceState = {
    city: CityType;
  sorting: SortingType;
}

export type OffersDataState = {
    isOffersDataLoading: boolean;
    offers: OfferType[];
}

export type PageEventsState = {
    sorting: SortingType;
    city: CityType;
}

export type UserReviewState = {
    comments: CommentType[];
    isCommentDataSending: boolean;
}
