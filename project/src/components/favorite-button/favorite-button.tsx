import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../../const';
import { postFavoriteOfferAction } from '../../store/action';
import { getAuthStatus } from '../../store/auth-user-process/selectors';
import { updateFavoriteOffer } from '../../store/offers-data/offers-data';

type FavoriteButtonProps = {
  id: number;
  isFavoriteOffer: boolean;
  place: string;
};

export type TProxyFavoriteButtonProps = Omit<FavoriteButtonProps, 'className'>;

export const FavoriteButton = ({
  id,
  isFavoriteOffer,
  place,
}: FavoriteButtonProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isOfferFavorite, setIsOfferFavorite] = useState<boolean>(isFavoriteOffer);
  const authStatus = useAppSelector(getAuthStatus);

  const handleFavoriteButtonClick = (evt: SyntheticEvent) => {
    evt.preventDefault();

    if (authStatus === AuthorizationStatus.No_Auth || authStatus === AuthorizationStatus.Unknown) {
      navigate(AppRoute.Login);
      return;
    }

    setIsOfferFavorite((prevIsOfferFavotire) => !prevIsOfferFavotire);

    const favoriteInfo = {
      id,
      status: Number(!isOfferFavorite),
    };

    dispatch(postFavoriteOfferAction(favoriteInfo));
    dispatch(updateFavoriteOffer(favoriteInfo));
  };

  return (

    <button
      className={`${place}__bookmark-button 
            ${isFavoriteOffer ? 'place-card__bookmark-button--active' : ''} button`}
      onClick={handleFavoriteButtonClick}
      type="button"
    >
      <svg className={`${place}__bookmark-icon`} width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};
