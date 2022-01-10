import {
  RECEIVE_ALL_DRINKS,
  RECEIVE_DRINK,
  START_LOADING_ALL_DRINKS,
  START_LOADING_DRINK
} from '../actions/drink_actions';

const initialState = {
  indexLoading: false,
  detailLoading: false
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_DRINKS:
      return Object.assign({}, state, { indexLoading: false });
    case RECEIVE_DRINK:
    case START_LOADING_ALL_DRINKS:
      return Object.assign({}, state, { indexLoading: true });
    case START_LOADING_DRINK:
      return Object.assign({}, state, { detailLoading: true });
    default:
      return state;
  }
};

export default loadingReducer;