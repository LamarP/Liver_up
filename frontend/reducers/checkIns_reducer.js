import { RECEIVE_CHECKINS, RECEIVE_CHECKIN, REMOVE_CHECKIN } from '../actions/check_in_actions';

const checkInsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_CHECKINS:
      return action.checkIns;
    case RECEIVE_CHECKIN:
      nextState[action.checkIn.id] = action.checkIn;
      return nextState;
    case REMOVE_CHECKIN:
      delete nextState[action.checkIn.id];
      return nextState;
    default:
      return state;
  }
};

export default checkInsReducer;