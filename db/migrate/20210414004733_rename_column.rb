class RenameColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :bars, :type, :style
  end
end
