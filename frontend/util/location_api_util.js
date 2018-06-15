
export const getCity = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/locations/${id}`
  })
}

export const getCities = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/locations`
  })
}

export const getEvents = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/locations/${id}/events`
  })
}
