class Booking < ApplicationRecord
  validates :location_id, :start_date, :end_date, :guest_id, :host_id, :location_name, presence: true

  belongs_to :location

  belongs_to :guest,
    primary_key: :id,
    foreign_key: :guest_id,
    class_name: 'User'

  belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: 'User'

end
