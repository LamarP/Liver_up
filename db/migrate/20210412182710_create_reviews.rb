class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :body, null: false
      t.float :rating, null: false
      t.integer :authour_id, null: false
      t.integer :drink_id, null: false

      t.timestamps
    end
    add_index :reviews, :authour_id
    add_index :reviews, :drink_id
  end
end
