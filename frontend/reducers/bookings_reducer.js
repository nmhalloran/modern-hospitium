import { RECEIVE_BOOKING } from '../actions/booking_actions';
import merge from 'lodash/merge';


const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKING:
      return merge( {}, state, { [action.booking.booking.id]: action.booking.booking });
    default:
      return state;
  }
};


export default bookingsReducer;
