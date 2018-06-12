# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

locations = Location.create([
  { name: "Boston", img_url: 'https://i.imgur.com/35FTluS.png'},
  {name: "San Francisco", img_url: "https://imgur.com/93mSUwz.png" },
  {name: "Miami", img_url: "https://imgur.com/akv5g6i.png"},
  {name: "Edinburgh", img_url: "https://imgur.com/sqon1fh.png" },
  {name: "Budapest", img_url: "https://imgur.com/6NcUHoW.png" },
  {name: "Istanbul", img_url: "https://imgur.com/k8As83O.png" },
  {name: "Bratislava", img_url: "https://imgur.com/XrhNcIG.png"},
  {name: "Sonoma", img_url: "https://imgur.com/BkrKkJm.png" },
  {name: "Rome", img_url: "https://imgur.com/0aNRYn4.png" },
  {name: "Unknown", img_url: "https://imgur.com/beBRku6.png" },
  {name: "Portland, OR", img_url: "https://imgur.com/Di7pMUp.png"},
  {name: "Portland, ME", img_url: "https://imgur.com/JeOPtZJ.png"},
  {name: "Paris", img_url: "https://imgur.com/jZs6WKz.png"}
])

users_url = ["https://imgur.com/tGTHfTU.png",
  "https://imgur.com/tGTHfTU.png",
"https://imgur.com/do8VhaJ.png",
"https://imgur.com/4eYoLM4.png",
"https://imgur.com/d6T5fAi.png",
"https://imgur.com/wo5xyeK.png",
"https://imgur.com/87E1ea9.png",
"https://imgur.com/CvNKzkL.png",
"https://imgur.com/wB9tACw.png",
"https://imgur.com/IHFgxmZ.png"
 ]

users = []

user.push(User.create({username: "nick", password: "123456", image_url: "https://imgur.com/aLAPKce.jpg" , location_id: 2}))

10.times do
  users.push(User.create({username: Faker::Internet.user_name, password: "123456", image_url: users_url.rotate!()[0], location_id: (1 + rand(13))}))
end


# users = User.create([
#   {username: ,password: "123456", img_url: users_url.rotate!()[0]},
#   {username: ,password: "123456", img_url:""},
#   {username: ,password: "123456", img_url:""},
#   {username: ,password: "123456", img_url:""},
#   {username: ,password: "123456", img_url:""},
#   {username: ,password: "123456", img_url:""},
#   {username: ,password: "123456", img_url:""},
#   {username: ,password: "123456", img_url:""},
#   {username: ,password: "123456", img_url:""},
#   {username: ,password: "123456", img_url:""},
#   {username: ,password: "123456", img_url:""},
#   {username: ,password: "123456", img_url:""},








User.create({username: 'NiartenyaW', password: "sweetawesome", image_url: 'https://avatars2.githubusercontent.com/u/8084693?s=400&v=4'})
