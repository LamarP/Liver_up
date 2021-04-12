class Bar < ApplicationRecord
  validates :name, presence: true
  validates :location, presence: true
  validates :type, presence: true

  has_many :drinks,
  foreign_key: :bar_id,
  class_name: :Drink

end
