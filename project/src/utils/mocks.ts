import { system, name, commerce, lorem, datatype, locale, address, } from "faker";
import { OfferType } from "../types/offer";


export const makeFakeOfferCard = (): OfferType => ({
    city: {
        name: 'Paris',
        location: {
            longitude: datatype.number(),
            latitude: datatype.number(),
            zoom: datatype.number({ min: 1, max: 10 }),
        },
    },
    previewImage: system.filePath(),
    images: new Array(3).fill(null).map(() =>
        { image: system.filePath() }),
    title: name.title(),
    isFavorite: datatype.boolean(),
    isPremium: datatype.boolean(),
    rating: datatype.number({ min: 0, max: 10 }),
    type: 'apartment',
    bedrooms: datatype.number(),
    maxAdults: datatype.number(),
    price: Number(commerce.price()),
    goods: new Array(3).fill(null).map(() => datatype.string()),
    host: {
        id: datatype.number(),
        name: datatype.string(),
        isPro: datatype.boolean(),
        avatarUrl: system.filePath(),
    },
    description: lorem.text(),
    location: {
        latitude: address.longitude(),
        longitude: address.latitude(),
        zoom: datatype.number({ min: 1, max: 10 }),
    },
    id: datatype.number(),
}) as unknown as OfferType;