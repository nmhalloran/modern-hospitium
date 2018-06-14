class Location < ApplicationRecord
  validates :name, presence: true

  has_many :users

  has_many :visitors,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'

  has_many :events

end
