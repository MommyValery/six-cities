import { Link } from 'react-router-dom';
import { OfferType } from '../../types/offer';
import { formateRating } from '../../utils/utils';
import { memo } from 'react';
import { FavoriteButton } from '../favorite-button/favorite-button';

type OfferCardType = OfferType
  & {
    onMouseMove?: (id: number) => void;
    onMouseLeave?: () => void;
    place: 'near-places' | 'cities' | 'favorites';
    onClick?: (id: number) => void;
  }

function OfferCard({ id, isFavorite,
  isPremium,
  previewImage,
  price,
  title,
  type,
  rating,
  place = 'cities',
  onMouseMove = () => void 0,
  onMouseLeave = () => void 0,
  onClick = () => void 0,
}: OfferCardType): JSX.Element {

  const handleMouseMove = () => {
    onMouseMove(id);
  };

  return (
    <article className={`${place}__place-card place-card`}
      onMouseMove={handleMouseMove}
      onMouseLeave={onMouseLeave}
    >
      { isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={`${place}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton place={'place-card'} isFavoriteOffer={isFavorite} id={id}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${formateRating(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default memo(OfferCard);
