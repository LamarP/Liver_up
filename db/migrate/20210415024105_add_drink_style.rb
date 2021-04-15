class AddDrinkStyle < ActiveRecord::Migration[5.2]
  def change
    add_column :drinks, :drink_style, :string
  end
end
