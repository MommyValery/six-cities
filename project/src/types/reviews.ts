import { OfferType } from './offer';

export type UserType = {
    id: number;
    name: string;
    avatarUrl: string;
    isPro: boolean;
    email: string;
    token: string;
}

export type UserAuth = Pick<UserType, 'email'> & { password: string };

export type AuthData = {
    email: string;
    password: string;
  };

export type CommentType = {
    id: number;
    comment: string;
    date: string;
    rating: number;
    user: UserType;
}

export type CommentAuth = Pick<OfferType, 'id'> & Pick<CommentType, 'comment' | 'rating'>
