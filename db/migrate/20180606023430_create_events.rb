class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :name, null: false
      t.integer :location_id, null: false
      t.timestamps
    end
  end
end
