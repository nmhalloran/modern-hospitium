
export const getCity = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/locations/${id}`
  })
}

export const getEvents = locationId => {
  return $.ajax({
    method: 'GET',
    url: `/api/locations/${locationID}/events`
  })
}
