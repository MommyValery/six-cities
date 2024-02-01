import { cities } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CityCard } from '../city-card/city-card';
import { CityName } from '../../types/offer';
import { useCallback } from 'react';
import { getCity } from '../../store/page-events/selectors';
import { setCityAction } from '../../store/page-events/page-events';


export default function CitiesList(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector(getCity);
  const handleClick = useCallback((city: CityName) => {
    dispatch(setCityAction(city));
  }, [dispatch]);

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <CityCard city={city} key={city} isActive={city === activeCity.name} onClick={handleClick} />
        ))}
      </ul>
    </section>
  );
}
