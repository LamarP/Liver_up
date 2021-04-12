class CreateDrinks < ActiveRecord::Migration[5.2]
  def change
    create_table :drinks do |t|
      t.string :drink_name, null: false
      t.string :description, null: false
      t.integer :abv, null: false
      t.string :base_spirit, null: false
      t.integer :bar_id, null: false

      t.timestamps
    end
    add_index :drinks, :drink_name
    add_index :drinks, :bar_id
  end
end
