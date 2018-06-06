import { combineReducers } from 'redux';

import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from  './errors_reducer';

const rootReducer = combineReducers({
  entitiesReducer,
  sessionReducer,
  errorsReducer
});

export default rootReducer;
