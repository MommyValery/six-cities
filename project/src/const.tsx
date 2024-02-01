import type { CityName, LocationType } from './types/offer';

export enum AuthorizationStatus {
    Auth = 'AUTH',
    No_Auth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}

export enum AppRoute {
    Root = '/',
    Login = '/login',
    Favorites = '/favorites',
    Property = '/offer',
    NotFound = '/404',
}

export enum HttpCode {
    NotFound = 404,
    NoAuth = 401,
}

export enum APIRoute {
    Offers = '/hotels',
    Login = '/login',
    Logout = '/logout',
    Comments = '/comments',
    JustSlash = '/',
  Comment = '/comments/',
  NearbyOffers = '/nearby',
  FavoriteOffers = '/favorite',
}

export enum Sorting {
    Popular = 'Popular',
    PriceIncrease = 'Price: low to high',
    PriceDecrease = 'Price: high to low',
    TopRated = 'Top rated first',
}

export const STAR_WIDTH = 100 as const;
export const STARS_COUNT = 5 as const;
export const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;
export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'] as const;


export const CityLocation: { [key in CityName]: LocationType } = {
  'Paris': {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13
  },
  'Cologne': {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 13
  },
  'Brussels': {
    latitude: 50.846557,
    longitude: 4.351697,
    zoom: 13
  },
  'Amsterdam': {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 13
  },
  'Hamburg': {
    latitude: 53.550341,
    longitude: 10.000654,
    zoom: 13
  },
  'Dusseldorf': {
    latitude: 51.225402,
    longitude: 6.776314,
    zoom: 13
  },
};

export enum StoreSlice {
    Page = 'PAGE',
    User = 'USER',
    OffersData = 'OFFERS_DATA',
    FavoriteOffersData = 'FAVORITE_OFFERS_DATA',
    CurrentOfferData = 'CURRENT_OFFER_DATA',
    UserReview = 'USER_REVIEW',
}
