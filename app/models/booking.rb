class Booking < ApplicationRecord
  validates :name, :location_id, :start_date, :end_date, :guest_id, :host_id, presence: true

  belongs_to :location
  belongs_to :guest,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'
  belongs_to :host,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'

end
