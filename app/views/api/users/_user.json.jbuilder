json.extract! user, :id, :username, :image_url, :location_id

json.hometown user.location.name
