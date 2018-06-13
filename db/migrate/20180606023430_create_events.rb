class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.date :date, null: false
      t.integer :location_id, null: false
      t.timestamps
    end
  end
end
