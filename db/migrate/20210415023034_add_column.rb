class AddColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :drinks, :img_url, :string
  end
end
