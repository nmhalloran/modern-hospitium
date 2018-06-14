import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import locationReducer from './location_reducer';
import eventsReducer from './events_reducer';
import bookingsReducer from './bookings_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  location: locationReducer,
  events: eventsReducer,
  bookings: bookingsReducer
});

export default entitiesReducer;
