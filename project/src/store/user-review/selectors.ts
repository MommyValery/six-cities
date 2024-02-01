import { State } from '../../types/state';
import { StoreSlice } from '../../const';
import { CommentType } from '../../types/reviews';


export const postComment = ({ [StoreSlice.UserReview]: USER_REVIEW }: State): CommentType[] => USER_REVIEW.comments;
export const getIsCommentDataSending = ({ [StoreSlice.UserReview]: USER_REVIEW }: State): boolean => USER_REVIEW.isCommentDataSending;
