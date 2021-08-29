import { RECEIVE_ALL_BARS, RECEIVE_BAR } from '../actions/bar_actions';
import { RECEIVE_DRINK } from '../actions/drink_actions';

const barsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_BARS:
      return Object.assign({}, action.bars, state);
    case RECEIVE_BAR:
      nextState[action.bar.id] = action.bar;
      return nextState;
    case RECEIVE_DRINK:
      nextState[action.payload.bar.id] = action.payload.bar;

      return nextState;

    default:
      return state;
  }
};

export default barsReducer;