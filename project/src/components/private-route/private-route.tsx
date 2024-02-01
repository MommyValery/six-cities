import { AppRoute, AuthorizationStatus } from '../../const';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/auth-user-process/selectors';
import Spinner from '../spinner/spinner';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthStatus);
  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <Spinner />;
  }

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
