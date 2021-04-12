class Review < ApplicationRecord
  validates :rating, inclusion: { in: (1..5) }

  belongs_to :drink,
  foreign_key: :drink_id,
  class_name: :Drink

  belongs_to :user,
  foreign_key: :authour_id,
  class_name: :user
  
end
