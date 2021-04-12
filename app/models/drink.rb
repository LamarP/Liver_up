class Drink < ApplicationRecord
  validates :drink_name, :description, :abv, :base_spirit, :bar_id, presence: true

  belongs_to :bar,
  foreign_key: :bar_id,
  class_name: :Bar

  has_many :reviews,
  foreign_key: :drink_id,
  class_name: :Review

end
