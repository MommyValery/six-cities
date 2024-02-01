import { createSlice } from '@reduxjs/toolkit';
import { StoreSlice } from '../../const';
import { postComment, } from '../action';
import { UserReviewState } from '../../types/state';

const initialState: UserReviewState = {
  comments: [],
  isCommentDataSending: false,
};

export const userReviewSlice = createSlice({
  name: StoreSlice.UserReview,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(postComment.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isCommentDataSending = false;
      })
      .addCase(postComment.pending, (state, action) => {
        state.isCommentDataSending = true;
      })
      .addCase(postComment.rejected, (state, action) => {
        state.isCommentDataSending = false;
      });
  }
});
