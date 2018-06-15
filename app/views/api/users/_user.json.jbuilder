json.extract! user, :id, :username, :image_url, :location_id, :bookings, :guest_trips_booked

json.hometown user.location.name

json.guests do
  json.array!  user.guests do |guest|
    json.partial! "api/users/user", user: guest
  end
end
