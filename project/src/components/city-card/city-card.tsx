import { CityName } from '../../types/offer';

type CityCardType = {
  isActive: boolean;
  city: CityName;
  onClick: (city: CityName)=> void;
}

export function CityCard({ isActive, city, onClick }: CityCardType) {
  const handleClick = () => {
    onClick(city);
  };
  return (
    <li className="locations__item" onClick={handleClick}>
      <a href="#" className={`locations__item-link tabs__item
        ${isActive
      ? 'tabs__item--active'
      : ''}`}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}
