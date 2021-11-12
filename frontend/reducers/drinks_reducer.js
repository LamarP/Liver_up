import { RECEIVE_ALL_DRINKS, RECEIVE_DRINK } from '../actions/drink_actions';

const drinksReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_DRINKS:
      return Object.assign({}, action.drinks, state);
    case RECEIVE_DRINK:
      // nextState[action.payload.drink.id] = action.payload.drink;
      // return nextState;
      return Object.assign({}, state, { [action.payload.drink.id]: action.payload.drink });
    default:
      return state;
  }
};

export default drinksReducer;