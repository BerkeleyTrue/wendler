// @flow
import type { Reducer } from 'redux';
import { combineReducers } from 'redux-vertical';
import mainRouterReducer from './routes/redux';
import authReducer from './Auth/redux';

export default function createReducer(
  ...sideReducers: Array<Reducer<any, any>>
) {
  return combineReducers(...sideReducers, mainRouterReducer, authReducer);
}