import { SHOW_BOOKING, HIDE_BOOKING } from '../actions/ui_actions';

export default function bookingReducer(state = false, action) {
  switch (action.type) {
    case SHOW_BOOKING:
      return true;
    case HIDE_BOOKING:
      return false;
    default:
      return state;
  }
}
