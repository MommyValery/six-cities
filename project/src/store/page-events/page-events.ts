import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CityLocation, Sorting, StoreSlice, cities } from '../../const';
import { PageEventsState } from '../../types/state';
import { CityName, SortingType } from '../../types/offer';

const initialState: PageEventsState = {
  sorting: Sorting.Popular,
  city: {
    name: cities[0],
    location: CityLocation[cities[0]],
  },
};

export const PageEventsSlice = createSlice({
  name: StoreSlice.Page,
  initialState,
  reducers: {
    setSortingAction: (state, action: PayloadAction<SortingType>) => {
      state.sorting = action.payload;
    },
    setCityAction: (state, action: PayloadAction<CityName>) => {
      state.city = {
        name: action.payload,
        location: CityLocation[action.payload]
      };
    }
  },
});

export const { setSortingAction, setCityAction } = PageEventsSlice.actions;

