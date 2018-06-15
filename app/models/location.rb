class Location < ApplicationRecord
  validates :name, presence: true

  has_many :hosts,
    primary_key: :id,
    foreign_key: :location_id,
    class_name: 'User'

  has_many :bookings

  has_many :events

end
