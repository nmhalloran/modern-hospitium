export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
);

const key = 'key=AIzaSyB9VfK4ttqwzUpghOYQgVY1Z8b4YqqFfh4';
const address = 'Krakow, Poland';
const parsedAddress = address.split(" ").join("+");
const url = 'https://maps.googleapis.com/maps/api/geocode/json?address='
const combinedUrl = url + address + key;

export const geocode = location => {
  console.log(location, "  goodbye")
  return $.ajax({
    method: 'GET',
    url: combinedUrl
  })
};


export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
)
