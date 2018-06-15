@locations.each do |location|
  json.set! location.id do
    json.name location.name
    json.img_url location.img_url
    json.id location.id
  end
end
