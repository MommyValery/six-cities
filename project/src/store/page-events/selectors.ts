import { CityType, SortingType } from '../../types/offer';
import { State } from '../../types/state';
import { StoreSlice } from '../../const';


export const getSorting = ({ [StoreSlice.Page]: PAGE }: State): SortingType => PAGE.sorting;
export const getCity = ({ [StoreSlice.Page]: PAGE }: State): CityType => PAGE.city;

