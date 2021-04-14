class AddTable < ActiveRecord::Migration[5.2]
  def change
    add_column :drinks, :bar_id, :integer
  end
end
