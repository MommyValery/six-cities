import OfferList from '../../components/offer-list/offer-list';
import CitiesList from '../../components/cities-list/cities-list';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks';
import { getCity } from '../../store/page-events/selectors';
import { getOffersData } from '../../store/offers-data/selectors';
import CardListEmpty from '../../components/card-list-empty/card-list-empty';


function MainPage(): JSX.Element {
  const activeCity = useAppSelector(getCity);
  const offers = useAppSelector(getOffersData);
  const isEmpty = offers.length === 0;
  return (
    <>
      <div style={{ display: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>

      <div className="page page--gray page--main">
        <Header />
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <CitiesList/>
          </div>
          <div className="cities">
            <div className={`cities__places-container container ${isEmpty ? 'cities__places-container--empty' : ''} `}>
              {isEmpty ? <CardListEmpty city = {activeCity.name} /> : <OfferList />}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default MainPage;
