import { AuthorizationStatus } from '../../const';
import { CommentAuth, CommentType } from '../../types/reviews';
import ReviewItem from '../review-item/review-item';
import ReviewForm from '../review-form/review-form';

type ReviewsListType = {
    reviews: CommentType[];
    authStatus: AuthorizationStatus;
    onSubmit: (formData: Omit<CommentAuth, 'id'>) => void;
}

const ReviewsList = ({reviews, authStatus, onSubmit}:ReviewsListType) :JSX.Element => {
  if (reviews.length === 0) {
    return (
      <section className="property__reviews reviews">
        {(authStatus === AuthorizationStatus.Auth) ? (<ReviewForm onSubmit={onSubmit} />) : ''}
      </section>
    );
  }

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot;
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) =>
          <ReviewItem review={review} key={review.id} />
        )}
      </ul>
      {(authStatus === AuthorizationStatus.Auth) ? (<ReviewForm onSubmit={onSubmit} />) : ''}
    </section>);

};

export default ReviewsList;
