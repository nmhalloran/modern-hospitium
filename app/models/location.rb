class Location < ApplicationRecord
  validates :name, :latitude, :longitude, presence: true


end
