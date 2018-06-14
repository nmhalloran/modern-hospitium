import * as BookingAPIUtil from '../util/booking_api_util';


export const RECEIVE_BOOKING = 'RECEIVE_BOOKING_INFO';

export const receiveBooking = booking => {
  return {
    type: RECEIVE_BOOKING,
    booking
  }
}

export const makeBooking = booking => dispatch => (
  BookingAPIUtil.getBooking(booking).then(booking => (
    dispatch(receiveBookint(booking))
  ))
);
