import { useState } from 'react';
import { Sorting } from '../../const';
import { SortingType } from '../../types/offer';

type SortingListType = {
  onChange: (name:SortingType) => void;
  activeSorting: SortingType;
}

function SortingList({activeSorting, onChange}: SortingListType): JSX.Element {
  const [isOpen, setIsOpened] = useState<boolean>(false);
  const handleToggleButton = () => {
    setIsOpened(!isOpen);
  };
  const handleSortClick = (name:SortingType) => {
    setIsOpened(false);
    onChange(name);
  };
  return (
    <form className="places__sorting" action="#" method="get" >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleToggleButton}>
        {Sorting[activeSorting]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isOpen && (
        <ul className="places__options places__options--custom places__options--opened">
          {(Object.entries(Sorting) as [SortingType, Sorting][]).map(([name, title])=> (
            <li
              className={`places__option ${name === activeSorting ? 'places__option--active' : ''}`}
              key={name}
              tabIndex={0}
              onClick={() => handleSortClick(name)}
            >
              {title}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default SortingList;
