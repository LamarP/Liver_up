class CheckIn < ApplicationRecord
  validates :author_id, :drink_id, presence: true
  validates :rating, inclusion: { in: (1..5) }
  belongs_to :drink,
  foreign_key: :drink_id,
  class_name: :Drink
  
  belongs_to :author,
  foreign_key: :author_id,
  class_name: :User

  # has_many :comments,
  # foreign_key: :checkin_id,
  # class_name: :Comment,
  # dependent: :destroy
end