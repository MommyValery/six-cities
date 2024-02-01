import {PayloadAction} from '@reduxjs/toolkit';
import {Middleware} from 'redux';
import { history } from '../../utils/browser-history';
import { reducer } from '../reducer';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === 'REDIRECT_ROUTE') {
          history.push(action.payload);
        }
        return next(action);
      };


