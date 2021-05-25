class CreateCheckIns < ActiveRecord::Migration[5.2]
  def change
    create_table :check_ins do |t|
      t.integer :author_id, null: false
      t.integer :drink_id, null: false
      t.text :body, null: false
      t.timestamps
    end

    add_index :check_ins, [:author_id, :drink_id]
  end
end
