
export const getCity = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/locations/${id}`
  })
}
