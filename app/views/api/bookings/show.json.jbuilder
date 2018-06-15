
json.booking do
  json.partial! "api/bookings/booking", booking: @booking
end

json.cityname @booking.location.name

json.location do
  json.set! @booking.location_id do
    json.partial! "api/locations/location", location: @location
  end
end
