# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

locations = Location.create([
  { name: "Boston", img_url: 'https://imgur.com/TYbwXiv.png'},
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

events = []

1.upto(12) do |idx|
  events.push(Event.create({name: "#{Location.find(idx).name} Coffee Meetup", description: "In #{Location.find(idx).name}? Meet locals and other believers in divine guest rites at a local coffee shop! Every Tuesday at 9am, there is an informal meetup of like minded individuals. Let's get caffeinated and talk about traveling!", date: "Every Wednesday at 9:00AM", location_id: idx, img_url: "https://imgur.com/GXFuukn.jpg"}))
end

1.upto(12) do |idx|
  events.push(Event.create({name: "#{Location.find(idx).name} Hike", description: "The walls of #{Location.find(idx).name} closing in a bit? Spend the day hiking through one of the many trails surrounding this great city. Group leaves fro in front of city hall at 8am sharp!", date: "Saturday mornings at 8:00AM", location_id: idx, img_url: "https://imgur.com/LsgfQs4.jpg"}))
end

1.upto(12) do |idx|
  events.push(Event.create({name: "#{Location.find(idx).name} Beer Crawl", description: "It's thirsty Thursday! Check out the scene with our #{Location.find(idx).name} beer crawl! Meet up with locals and other travelers and paint the town red! Group starts at that really famous old bar in the heart of downtown. at 7pm. Remember to drink responsibly!", date: "Thursdays at 7:00PM", location_id: idx, img_url: "https://imgur.com/DbNEaCg.jpg"}))
end



users_url = ["https://randomuser.me/api/portraits/men/63.jpg",
"https://randomuser.me/api/portraits/men/42.jpg",
"https://randomuser.me/api/portraits/women/63.jpg",
"https://randomuser.me/api/portraits/women/6.jpg",
"https://randomuser.me/api/portraits/women/69.jpg",
"https://randomuser.me/api/portraits/men/2.jpg",
"https://randomuser.me/api/portraits/men/11.jpg",
"https://randomuser.me/api/portraits/men/97.jpg",
"https://randomuser.me/api/portraits/women/2.jpg",
"https://randomuser.me/api/portraits/women/9.jpg",
"https://randomuser.me/api/portraits/men/26.jpg",
"https://randomuser.me/api/portraits/women/85.jpg",
"https://randomuser.me/api/portraits/women/91.jpg",
"https://randomuser.me/api/portraits/men/85.jpg",
"https://randomuser.me/api/portraits/men/95.jpg",
"https://randomuser.me/api/portraits/men/8.jpg",
"https://randomuser.me/api/portraits/women/43.jpg",
"https://randomuser.me/api/portraits/men/46.jpg",
"https://randomuser.me/api/portraits/men/37.jpg",
"https://randomuser.me/api/portraits/women/26.jpg",
"https://randomuser.me/api/portraits/men/17.jpg",
"https://randomuser.me/api/portraits/women/17.jpg",
"https://randomuser.me/api/portraits/women/6.jpg",
"https://randomuser.me/api/portraits/men/55.jpg",
"https://randomuser.me/api/portraits/women/83.jpg",
"https://randomuser.me/api/portraits/women/4.jpg",
"https://randomuser.me/api/portraits/men/62.jpg",
"https://randomuser.me/api/portraits/women/66.jpg",
"https://randomuser.me/api/portraits/women/64.jpg",
"https://randomuser.me/api/portraits/women/27.jpg",
"https://randomuser.me/api/portraits/women/14.jpg",
"https://randomuser.me/api/portraits/men/67.jpg",
"https://randomuser.me/api/portraits/women/44.jpg",
"https://randomuser.me/api/portraits/women/57.jpg",
"https://randomuser.me/api/portraits/men/1.jpg",
"https://randomuser.me/api/portraits/women/47.jpg",
"https://randomuser.me/api/portraits/women/0.jpg",
"https://randomuser.me/api/portraits/women/68.jpg",
"https://randomuser.me/api/portraits/women/90.jpg",
"https://randomuser.me/api/portraits/women/8.jpg",
"https://randomuser.me/api/portraits/men/55.jpg",
"https://randomuser.me/api/portraits/men/41.jpg",
"https://randomuser.me/api/portraits/women/75.jpg",
"https://randomuser.me/api/portraits/men/14.jpg",
"https://randomuser.me/api/portraits/men/12.jpg",
"https://randomuser.me/api/portraits/men/54.jpg",
"https://randomuser.me/api/portraits/men/81.jpg",
"https://randomuser.me/api/portraits/men/73.jpg",
"https://randomuser.me/api/portraits/women/12.jpg",
"https://randomuser.me/api/portraits/women/68.jpg",
"https://randomuser.me/api/portraits/women/86.jpg",
"https://randomuser.me/api/portraits/women/63.jpg",
"https://randomuser.me/api/portraits/men/70.jpg",
"https://randomuser.me/api/portraits/men/5.jpg",
"https://randomuser.me/api/portraits/women/36.jpg",
"https://randomuser.me/api/portraits/women/65.jpg",
"https://randomuser.me/api/portraits/women/29.jpg",
"https://randomuser.me/api/portraits/men/1.jpg",
"https://randomuser.me/api/portraits/women/92.jpg",
"https://randomuser.me/api/portraits/women/50.jpg",
"https://randomuser.me/api/portraits/women/58.jpg",
"https://randomuser.me/api/portraits/men/22.jpg",
"https://randomuser.me/api/portraits/men/6.jpg",
"https://randomuser.me/api/portraits/men/26.jpg",
"https://randomuser.me/api/portraits/women/53.jpg",
"https://randomuser.me/api/portraits/women/21.jpg",
"https://randomuser.me/api/portraits/women/80.jpg",
"https://randomuser.me/api/portraits/women/18.jpg",
"https://randomuser.me/api/portraits/women/75.jpg",
"https://randomuser.me/api/portraits/women/41.jpg",
"https://randomuser.me/api/portraits/women/30.jpg",
"https://randomuser.me/api/portraits/women/34.jpg",
"https://randomuser.me/api/portraits/men/20.jpg",
"https://randomuser.me/api/portraits/women/75.jpg",
"https://randomuser.me/api/portraits/men/21.jpg",
"https://randomuser.me/api/portraits/women/88.jpg",
"https://randomuser.me/api/portraits/women/13.jpg",
"https://randomuser.me/api/portraits/men/46.jpg",
"https://randomuser.me/api/portraits/women/15.jpg",
"https://randomuser.me/api/portraits/men/11.jpg",
"https://randomuser.me/api/portraits/men/18.jpg",
"https://randomuser.me/api/portraits/women/46.jpg",
"https://randomuser.me/api/portraits/women/72.jpg",
"https://randomuser.me/api/portraits/men/34.jpg",
"https://randomuser.me/api/portraits/men/2.jpg",
"https://randomuser.me/api/portraits/women/1.jpg",
"https://randomuser.me/api/portraits/men/63.jpg",
"https://randomuser.me/api/portraits/women/75.jpg",
"https://randomuser.me/api/portraits/women/81.jpg",
"https://randomuser.me/api/portraits/women/60.jpg",
"https://randomuser.me/api/portraits/men/24.jpg",
"https://randomuser.me/api/portraits/women/40.jpg",
"https://randomuser.me/api/portraits/men/53.jpg",
"https://randomuser.me/api/portraits/men/39.jpg",
"https://randomuser.me/api/portraits/women/9.jpg",
"https://randomuser.me/api/portraits/men/50.jpg",
"https://randomuser.me/api/portraits/men/39.jpg",
"https://randomuser.me/api/portraits/women/55.jpg",
"https://randomuser.me/api/portraits/women/77.jpg",
"https://randomuser.me/api/portraits/men/21.jpg",
"https://randomuser.me/api/portraits/women/57.jpg",
"https://randomuser.me/api/portraits/women/21.jpg",
"https://randomuser.me/api/portraits/men/45.jpg",
"https://randomuser.me/api/portraits/men/20.jpg",
"https://randomuser.me/api/portraits/women/55.jpg",
"https://randomuser.me/api/portraits/women/79.jpg",
"https://randomuser.me/api/portraits/men/11.jpg",
"https://randomuser.me/api/portraits/men/96.jpg",
"https://randomuser.me/api/portraits/men/54.jpg",
"https://randomuser.me/api/portraits/men/41.jpg",
"https://randomuser.me/api/portraits/women/77.jpg",
"https://randomuser.me/api/portraits/women/0.jpg",
"https://randomuser.me/api/portraits/men/46.jpg",
"https://randomuser.me/api/portraits/men/57.jpg",
"https://randomuser.me/api/portraits/women/74.jpg",
"https://randomuser.me/api/portraits/men/63.jpg",
"https://randomuser.me/api/portraits/women/4.jpg",
"https://randomuser.me/api/portraits/women/11.jpg",
"https://randomuser.me/api/portraits/women/84.jpg",
"https://randomuser.me/api/portraits/women/57.jpg",
"https://randomuser.me/api/portraits/women/32.jpg",
"https://randomuser.me/api/portraits/women/61.jpg",
"https://randomuser.me/api/portraits/men/17.jpg",
"https://randomuser.me/api/portraits/men/18.jpg",
"https://randomuser.me/api/portraits/women/48.jpg",
"https://randomuser.me/api/portraits/men/69.jpg",
"https://randomuser.me/api/portraits/men/4.jpg",
"https://randomuser.me/api/portraits/men/4.jpg",
"https://randomuser.me/api/portraits/men/40.jpg",
"https://randomuser.me/api/portraits/men/30.jpg",
"https://randomuser.me/api/portraits/women/7.jpg",
"https://randomuser.me/api/portraits/men/84.jpg",
"https://randomuser.me/api/portraits/women/83.jpg",
"https://randomuser.me/api/portraits/women/20.jpg",
"https://randomuser.me/api/portraits/men/27.jpg",
"https://randomuser.me/api/portraits/women/32.jpg",
"https://randomuser.me/api/portraits/men/81.jpg",
"https://randomuser.me/api/portraits/women/34.jpg",
"https://randomuser.me/api/portraits/women/90.jpg",
"https://randomuser.me/api/portraits/men/28.jpg",
"https://randomuser.me/api/portraits/women/23.jpg",
"https://randomuser.me/api/portraits/men/83.jpg",
"https://randomuser.me/api/portraits/women/43.jpg",
"https://randomuser.me/api/portraits/women/78.jpg",
"https://randomuser.me/api/portraits/men/3.jpg",
"https://randomuser.me/api/portraits/women/77.jpg",
"https://randomuser.me/api/portraits/women/67.jpg",
"https://randomuser.me/api/portraits/women/26.jpg",
"https://randomuser.me/api/portraits/men/90.jpg",
"https://randomuser.me/api/portraits/men/62.jpg"
 ]

 users = []
 users.push(User.create({username: "nick", password: "123456", image_url: "https://imgur.com/aLAPKce.jpg" , location_id: 2}))

0.upto(150) do |idx|
  users.push(User.create({username: Faker::Internet.user_name(6..9), password: "123456", image_url: users_url[idx], location_id: (1 + rand(13))}))
end


User.create({username: 'NiartenyaW', password: "sweetawesome", image_url: 'https://avatars2.githubusercontent.com/u/8084693?s=400&v=4'})
