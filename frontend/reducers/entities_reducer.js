import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import drinksReducer from './drinks_reducer';
import checkInsReducer from './checkIns_reducer';
import barsReducer from './bars_reducer';
export default combineReducers({
  users: usersReducer,
  drinks: drinksReducer,
  checkIns: checkInsReducer,
  bars: barsReducer
});
