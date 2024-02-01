import OfferCard from '../offer-card/offer-card';
import MapComponent from '../map/map';
import Spinner from '../spinner/spinner';
import SortingList from '../sorting-list/sorting-list';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { SortingType } from '../../types/offer';
import { getIsOffersDataLoading, selectOffers } from '../../store/offers-data/selectors';
import { setSortingAction } from '../../store/page-events/page-events';
import { getCity, getSorting } from '../../store/page-events/selectors';


function OfferList(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeSorting = useAppSelector(getSorting);
  const activeCity = useAppSelector(getCity);
  const offers = useAppSelector(selectOffers);
  const isOfferLoading = useAppSelector(getIsOffersDataLoading);
  const [activeOffer, setActiveOffer] = useState<number | null>(null);
  const handleCardMouseMove = (id: number) => {
    setActiveOffer(id);
  };
  const handleCardMouseLeave = () => {
    setActiveOffer(null);
  };
  const onSortingChange = (name:SortingType) => {
    dispatch(setSortingAction(name));
  };
  const handleMouseClick = (id: number) => {
    setActiveOffer(id);
  };

  if (isOfferLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {activeCity.name}</b>
        <SortingList onChange={onSortingChange} activeSorting={activeSorting}/>
        <div className="cities__places-list places__list tabs__content">
          {offers.map((offer) => (
            <OfferCard
              key = {offer.id}
              {...offer}
              onMouseLeave={handleCardMouseLeave}
              onMouseMove={handleCardMouseMove}
              onClick={handleMouseClick}
              place={'cities'}
            />
          ))}
        </div>
      </section>
      <div className="cities__right-section">
        <MapComponent city={activeCity} items={offers} activeItem={activeOffer} />
      </div>
    </>
  );
}

export default OfferList;
