import { RECEIVE_CITY_INFO, RECEIVE_CITIES_INFO} from '../actions/location_actions';
import { RECEIVE_BOOKING } from '../actions/booking_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({ id: null });

const locationReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CITY_INFO:
      return merge( {}, state, { [action.city.id]: action.city });
    case RECEIVE_CITIES_INFO:
      return action.cities;
    case RECEIVE_BOOKING:
      return merge({}, state, action.booking.location);

      // return merge( {}, state, state[action.booking.location_id].booking, { [action.booking.id]: action.booking } );

    default:
      return state;
  }
};

export default locationReducer;
