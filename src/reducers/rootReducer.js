import { combineReducers } from 'redux';
import notifications from './notifications';
import user from './user';
import graphData from './graphData';
import menuData from './menuData';

const rootReducer = combineReducers(
  {
    notifications,
    user,
    graphData,
    menuData,
  }
);

export default rootReducer;
