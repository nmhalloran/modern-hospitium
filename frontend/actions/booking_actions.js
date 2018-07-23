import * as BookingAPIUtil from "../util/booking_api_util";

export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";

export const receiveBooking = booking => {
  return {
    type: RECEIVE_BOOKING,
    booking
  };
};

export const receiveBookings = bookings => {
  return {
    type: RECEIVE_BOOKINGS,
    bookings
  };
};

export const makeBooking = booking => dispatch =>
  BookingAPIUtil.makeBooking(booking).then(booking =>
    dispatch(receiveBooking(booking))
  );

export const getBookings = id => dispatch =>
  BookingAPIUtil.getBookings(id).then(bookings =>
    dispatch(receiveBookingsInfo(bookings))
  );
