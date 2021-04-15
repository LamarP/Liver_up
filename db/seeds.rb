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
# Bar.delete_all
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
bar1 = Bar.create!(
  { name: 'the dump', location: 'yo momma', style: 'please work'}
)
bar2 = Bar.create!(
  { name: 'gamsaan', location: 'San Francisco...', style: 'cocktail'}
)
  
  

  
drinks = {
  '1' => {
    "drink_name" => "Granny Rita", "base_spirit" => "Tequila", "description" => "bitter melon, cucumber, granny apple sweetend up with gum syrup","abv" => 17.78,"drink_style" =>"Sour", "bar_id" => 2
  },
  '2' => {
    "drink_name" => "Old man Logan", "base_spirit" => "Scotch", "description" => "Smokey on the nose followed by a subtle sweet melon citrus, returning back to the smoke for the finish.","abv" => 17.62,"drink_style" =>"Sour", "bar_id" => 2
  },
  '3' => {
    "drink_name" => "Somber nights", "base_spirit" => "Vodka or Rum", "description" => "Bartenders take on boba tea. Robust chinese black tea, Nilla Wafer infused Milk, with lemon and winter melon sugar","abv" => 8.25,"drink_style" =>"Milk Punch", "bar_id" => 2
  },
  '4' => {
    "drink_name" => "ending start", "base_spirit" => "Rum", "description" => "Slightly peppery, aromatic, reminiscent of coconut crossed with vanilla","abv" => 20,"drink_style" => "Tiki", "bar_id" => 2
  },
  '5' => {
    "drink_name" => "Mariposa", "base_spirit" => "Mezcal", "description" => "I ate the worm","abv" => 90000,"drink_style" =>"Sour", "bar_id" => 1
  },
  '6' => {
    "drink_name" => "Shoryuken", "base_spirit" => "Mezcal", "description" => "Chili Crisp infused Mezcal, cooled down with passionfruit chrysantum syrup and lime","abv" => 17.65,"drink_style" =>"spicey sour", "bar_id" => 2
  }

}
 
 
 drinks.map do |num, details|
  drink = Drink.create!(
    drink_name: details["drink_name"],
    base_spirit: details["base_spirit"],
    description: details["description"],
    abv: details["abv"],
    drink_style: details["drink_style"],
    bar_id: details["bar_id"],
    img_url: "#{num}.jpeg"
  )
 end
  
  


# reviews

# Review.create!([
#   {drink_id: 5, author_id: 1, body: "slurred mumbling", rating: 4.7},
#   {drink_id: 3, author_id: 3, body: "I can't feel feelings!", rating: 3.2},
#   {drink_id: 2, author_id: 2, body: "a delicate balance of aromatics make the spirit pop!", rating: 3},
#   {drink_id: 2, author_id: 1, body: "gimme back my keys!", rating: 2.4}
# ])
