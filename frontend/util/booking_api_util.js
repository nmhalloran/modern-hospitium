export const makeBooking = booking =>
  $.ajax({
    method: "POST",
    url: "api/bookings",
    data: { booking }
  });

export const getBooking = id =>
  $.ajax({
    method: "GET",
    url: `api/users/${id}/bookings`
  });
