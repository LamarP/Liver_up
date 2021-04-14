class RemoveColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :drinks, :bar_id
  end
end
