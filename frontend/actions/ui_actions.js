
export const SHOW_BOOKING= 'SHOW_BOOKING';
export const HIDE_BOOKING= 'HIDE_BOOKING';

export const openBooking = booking => {
  return {
    type: SHOW_BOOKING,
    booking
  };
};

export const closeBooking = () => {
  return {
    type: HIDE_BOOKING
  };
};
