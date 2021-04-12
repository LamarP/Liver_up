import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer'
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import modalReducer from './modal_reducer';
import ui from './ui_reducer';
const rootReducer = combineReducers({
  modal: modalReducer,
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  ui
});

export default rootReducer;
