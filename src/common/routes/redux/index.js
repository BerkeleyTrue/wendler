// @flow
import { isLocationAction } from 'redux-first-router';
import { addNS } from 'redux-vertical';
import { ns as homeNS, routesMap as homeRoutes } from '../../Home/redux';
import { ns as authNS, routesMap as authRoutes } from '../../Auth/redux';

const ns = 'mainRouter';

type GlobalState = {
  [ns: string]: string,
};

export const mainRouterSelector = (state: GlobalState) => state[ns];

export default addNS(ns, function mainRouterReducer(
  state: string = 'NotFound',
  action,
) {
  if (!isLocationAction(action)) {
    return state;
  }
  if (homeRoutes[action.type]) {
    return homeNS;
  }
  if (authRoutes[action.type]) {
    return authNS;
  }
  return '';
});
