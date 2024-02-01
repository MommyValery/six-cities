import { STARS_COUNT } from '../../const';
import { useState, Fragment, useRef } from 'react';
import { ChangeEvent } from 'react';
import { CommentAuth } from '../../types/reviews';
import { useAppSelector } from '../../hooks';
import { getIsCommentDataSending } from '../../store/user-review/selectors';

type ReviewFormType = {
    onSubmit: (formData: Omit<CommentAuth, 'id'>) => void;
}

function ReviewForm({onSubmit}: ReviewFormType): JSX.Element {
  const inputRef = useRef(null);
  const [rating, setRating] = useState<number>(0);
  const [text, setText] = useState<string>('');
  const isCommentDataSending = useAppSelector(getIsCommentDataSending);
  const isSubmitDisabled = (text.length < 50) || (rating === 0) || isCommentDataSending;
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(e.target.value));
  };

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleFormSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      comment: text,
      rating
    });
    e.target.reset();
    setRating(0);

  };

  return (
    <form className="reviews__form form" action="#" method="post"
      ref={inputRef} onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Array.from({length: STARS_COUNT},(_,i) =>
          (
            <Fragment key={`Star ${STARS_COUNT - i}`} >
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                defaultValue={STARS_COUNT - i}
                id={`${STARS_COUNT - i}-stars`}
                type="radio"
                checked={STARS_COUNT - i === rating}
                onChange ={handleInputChange}
                disabled={isCommentDataSending}
              />
              <label
                htmlFor={`${STARS_COUNT - i}-stars`}
                className="reviews__rating-label form__rating-label"
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          )
        )}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleTextAreaChange}
        disabled={isCommentDataSending}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitDisabled} >Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
