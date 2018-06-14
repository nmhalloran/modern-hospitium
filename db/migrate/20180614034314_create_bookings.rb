class CreateBookings < ActiveRecord::Migration[5.1]
  def change
    create_table :bookings do |t|
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.integer :location_id, null: false
      t.integer :guest_id, null: false
      t.integer :host_id, null: false
    end
  end
end
