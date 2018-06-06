class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.string :body, null: false
      t.boolean :positive, null: false
      t.integer :user_id, null: false
      t.integer :traveler_id, null: false
      t.timestamps
    end
  end
end
