import Header from '../../components/header/header';
import MapComponent from '../../components/map/map';
import OfferCard from '../../components/offer-card/offer-card';
import Spinner from '../../components/spinner/spinner';
import ReviewsList from '../../components/reviews-list/reviews-list';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchNearbyOffers, fetchOffer, fetchReviews, postComment } from '../../store/action';
import { formateRating } from '../../utils/utils';
import { CommentAuth } from '../../types/reviews';
import { getComments, getIsOfferLoading, getNearbyOffers, getOffer } from '../../store/current-offer-data/selectors';
import { getAuthStatus } from '../../store/auth-user-process/selectors';
import { getCity } from '../../store/page-events/selectors';
import { FavoriteButton } from '../../components/favorite-button/favorite-button';


function OfferPage(): JSX.Element | null {
  const params = useParams();
  const dispatch = useAppDispatch();
  const isOfferLoading = useAppSelector(getIsOfferLoading);
  const offer = useAppSelector(getOffer);
  const nearbyOffers = useAppSelector(getNearbyOffers);
  const city = useAppSelector(getCity);
  const authStatus = useAppSelector(getAuthStatus);
  const comments = useAppSelector(getComments);
  const onSubmitForm = (formData: Omit<CommentAuth, 'id'>) => {
    dispatch(postComment({ id, ...formData }));
  };


  useEffect(() => {
    const {id} = params;
    if (id) {
      const parseId = Number(id);
      dispatch(fetchOffer(parseId));
      dispatch(fetchNearbyOffers(parseId));
      dispatch(fetchReviews(parseId));
    }
  }, [params, dispatch]);

  if (!offer) {
    return null;
  }

  if (isOfferLoading) {
    return <Spinner/>;
  }

  const { images, isPremium, isFavorite, title, id, rating, type, bedrooms, maxAdults, price, goods, host, description} = offer;
  const locations = [offer, ...nearbyOffers];
  return (

    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image) => (
                <div className="property__image-wrapper" key={image}>
                  <img className="property__image" src={image} alt="Photo studio"/>
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                isPremium &&
                    <div className="property__mark">
                      <span>Premium</span>
                    </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name"> {title}</h1>
                <FavoriteButton isFavoriteOffer={isFavorite} place={'property'} id={id} />
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${formateRating(rating)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                      Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                {goods.length > 0 && (
                  <ul className="property__inside-list">
                    {goods.map((good) => (
                      <li className="property__inside-item" key={good}>
                        {good}
                      </li>))}
                  </ul>
                )}
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  <span className="property__user-status">
                    {host.isPro}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <ReviewsList reviews={comments} authStatus={authStatus} onSubmit={onSubmitForm} />
            </div>
          </div>
          <section className="property__map map">
            {<MapComponent city={city} activeItem={id} place={'property'} items={locations}/>}
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearbyOffers.map((card)=> (
                <OfferCard key={card.id} {...card} place={'near-places'} />
              )
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
