class ChangeReview < ActiveRecord::Migration[5.2]
  def change
    rename_column :reviews, :authour_id, :author_id
  end
end
