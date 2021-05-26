class ChangeCheckin < ActiveRecord::Migration[5.2]
  def change
    add_column :check_ins, :rating, :integer, default: 0
  end
end
