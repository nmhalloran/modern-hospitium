json.extract! booking, :id,:start_date, :end_date, :guest_id, :host_id, :location_id

json.cityname booking.location.name
