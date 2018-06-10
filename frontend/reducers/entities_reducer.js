import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import locationReducer from './location_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  location: locationReducer
});

export default entitiesReducer;
