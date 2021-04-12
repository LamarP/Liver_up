class CreateBars < ActiveRecord::Migration[5.2]
  def change
    create_table :bars do |t|
      t.string :name, null: false
      t.string :location, null: false
      t.string :type, null: false
      t.timestamps
    end
    add_index :bars, :name
  end
end
