json.extract! location, :id, :name, :img_url, :events


json.hosts do
  json.array! location.hosts do |host|
    json.partial! "api/users/user", user: host
  end
end

json.visitors do
  json.array! location.visitors do |visitor|
    json.partial! "api/users/user", user: visitor
  end
end
