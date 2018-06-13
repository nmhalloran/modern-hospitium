class Event < ApplicationRecord
  validates :name, :location_id, presence: true

  belongs_to :location
  has_many :users

end
