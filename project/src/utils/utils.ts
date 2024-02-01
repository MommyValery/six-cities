import { STAR_WIDTH, STARS_COUNT, months } from '../const';
import { OfferType, SortingType } from '../types/offer';

export function formateDate(date: string): string {
  const reversedDate = new Date(date);
  const month = months[reversedDate.getMonth()];
  return `${month} ${reversedDate.getFullYear()}`;
}

export function formateRating(rating:number):number {
  return STAR_WIDTH * rating / STARS_COUNT;
}

export const Comparator: {
  [key in SortingType]: (a: OfferType, b: OfferType) => number} = {
    Popular: () => 0,
    PriceIncrease: (a, b) => a.price - b.price,
    PriceDecrease: (a, b) => b.price - a.price,
    TopRated: (a, b) => b.rating - a.rating,
  };

