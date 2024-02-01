import { cities } from '../../const';
import { useAppSelector } from '../../hooks';
import { getFavoriteOffers } from '../../store/favorite-offers-data/selectors';
import Header from '../../components/header/header';
import OfferCard from '../../components/offer-card/offer-card';
import FavoritesPageEmpty from '../favorites-page-empty/favorites-page-empty';


function FavoritesPage(): JSX.Element {
  const favoriteOffers = useAppSelector(getFavoriteOffers);

  return (favoriteOffers.length) ? (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cities.map((cityItem) => (
                <li className="favorites__locations-items" key={`${cityItem}`}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{cityItem}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places" >
                    {favoriteOffers.map((favorite) => {
                      const { city } = favorite;
                      if (city.name === cityItem) {
                        return <OfferCard place={'favorites'} {...favorite} key={`${favorite.id}`} />;
                      }
                    })}
                  </div>
                </li>)
              )}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  )
    : <FavoritesPageEmpty/>;
}

export default FavoritesPage;
