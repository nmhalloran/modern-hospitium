import { combineReducers } from 'redux';

import sessionErrorReducer from './session_errors_reducer';

export default combineReducers({
  session: sessionErrorReducer });
