import { useAppDispatch } from '../../hooks';
import { postFavoriteOfferAction } from '../../store/action';
import { OfferType } from '../../types/offer';

type BookmarkProps = {
    id: OfferType['id'];
    isActive: boolean;
    place: 'place-card' | 'property';
}

function Bookmark({ id, isActive, place }: BookmarkProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleButtonClick = () => {
    dispatch(postFavoriteOfferAction({id, status: isActive ? 0 : 1}));
  };

  return (
    <button
      className={`${place}__bookmark-button button ${isActive ? ` ${place}__bookmark-button--active` : ''}`}
      type="button"
      onClick={handleButtonClick}
    >
      <svg className="place-card__bookmark-icon"
        width={place === 'property' ? 31 : 18}
        height={place === 'property' ? 33 : 19}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isActive ? 'From' : 'To'} bookmarks</span>
    </button>
  );
}

export default Bookmark;
