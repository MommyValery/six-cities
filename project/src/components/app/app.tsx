import { Routes, Route } from 'react-router-dom';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import OfferPage from '../../pages/offer-page/offer-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { AppRoute } from '../../const';
import { history } from '../../utils/browser-history';

function App(): JSX.Element {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path={AppRoute.Login} element={<SignInPage />} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute>
            <FavoritesPage />
          </PrivateRoute>
        }
        />
        <Route path={`${AppRoute.Property}/:id`} element={<OfferPage/>} />
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
