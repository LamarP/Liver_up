class Bar < ApplicationRecord
  validates :name, presence: true
  validates :location, presence: true
  validates :style, presence: true
  validates :img_url, presence: true

  has_many :drinks,
  foreign_key: :bar_id,
  class_name: :Drink

  has_many :check_ins,
  through: :drinks
  
end
