# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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
