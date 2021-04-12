import { combineReducers } from 'redux';
import entities from './entities_reducer'
import sessionReducer from './session_reducer';
import errors from './errors_reducer';
import modalReducer from './modal_reducer';
import ui from './ui_reducer';
const rootReducer = combineReducers({
  modal: modalReducer,
  entities,
  session: sessionReducer,
  errors,
  ui
});

export default rootReducer;
