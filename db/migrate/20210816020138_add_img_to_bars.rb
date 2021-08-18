class AddImgToBars < ActiveRecord::Migration[5.2]
  def change
    add_column :bars, :img_url, :string 
  end
end
