# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Drink.delete_all
Review.delete_all
# users

u1 = User.create!(
  username: 'guest',
  password: 'password',
  email: 'guest'
)

u2 = User.create!(
  username: 'username',
  password: 'password',
  email: 'username'
)

# drinks

drink1 = Drink.create!({
  drink_name: "Mariposa",
  bar_id: bar1.id,
  style: "Sour",
  base_spirit: "Mezcal"
  rating: 4.5,
  description: "",
  abv: 90000,
  
  })
drink2 = Drink.create!({
  drink_name: "Apple juice",
  bar_id: bar1.id,
  style: "Sweet",
  base_spirit: "apples"
  rating: 4.5,
  description: "it's apple juice",
  abv: 0,
  
  })

# reviews

Review.create!([
  {drink_id: 5, author_id: 1, body: "slurred mumbling", rating: 4.7},
  {drink_id: 3, author_id: 3, body: "I can't feel feelings!", rating: 3.2},
  {drink_id: 2, author_id: 2, body: "a delicate balance of aromatics make the spirit pop!", rating: 3},
  {drink_id: 2, author_id: 1, body: "gimme back my keys!", rating: 2.4}
])