import { RECEIVE_ALL_DRINKS } from '../actions/drink_actions';
import { RECEIVE_DRINK } from '../actions/drink_actions';
const drinksReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_DRINKS:
      return Object.assign({}, action.drinks, state);
    case RECEIVE_DRINK:
      nextState[action.payload.drink.id] = action.payload.drink;
      return nextState;
    default:
      return state;
  }
};

export default drinksReducer;