import { Sorting, cities } from '../const';
export type CityName = typeof cities[number];
export type SortingType = keyof typeof Sorting;

export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type CityType = {
  name: CityName;
  location: LocationType;
};

type HostType = {
  id: number;
  name: string;
  isPro: boolean;
  avatarUrl: string;
};

export type OfferType = {
  city: CityType;
  previewImage: string;
  images: string[];
  title: string;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  host: HostType;
  description: string;
  location: LocationType;
  id: number;
};

export type FavoriteAuth = Pick<OfferType, 'id'> & { status: 1 | 0 };
