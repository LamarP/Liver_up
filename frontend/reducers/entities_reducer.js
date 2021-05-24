import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import drinksReducer from './drinks_reducer';
import reviewsReducer from './reviews_reducer';
export default combineReducers({
  users: usersReducer,
  drinks: drinksReducer,
   reviews: reviewsReducer
});
