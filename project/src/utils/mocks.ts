import { system, name, commerce, lorem, datatype, locale, address, } from "faker";
import { OfferType } from "../types/offer";


export const makeFakeOfferCard = (): OfferType => ({
    city: {
        name: CityName;
        location: {
            latitude: address.longitude(),
            longitude: address.latitude(),
            zoom: datatype.number({min: 1, max: 10}),
          },
      },
    previewImage: system.filePath(),
    images: new Array(3).fill(null).map((=> (
        { image: system.filePath() }
    ))),
    title: name.title(),
    isFavorite: datatype.boolean(),
    isPremium: datatype.boolean(),
    rating: datatype.number({min: 0, max: 10}),
    type: 'apartment' | 'room' | 'house' | 'hotel';
    bedrooms: datatype.number(),
    maxAdults: datatype.number(),
    price: commerce.price(),
    goods: string[];
    host: {
        id: number;
        name: string;
        isPro: boolean;
        avatarUrl: string;
      };
    description: lorem.text(),
    location: {
        latitude: address.longitude(),
        longitude: address.latitude(),
        zoom: datatype.number({min: 1, max: 10}),
      },
    id: datatype.number(),

}) as OfferType;