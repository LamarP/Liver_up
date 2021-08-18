User.delete_all
Drink.delete_all
Review.delete_all
CheckIn.delete_all
# Bar.delete_all
# users

# u1 = User.create!(
#   f_name: '',
#   l_name: 'Gumble',
#   password: 'password',
#   email: 'guest',
#   id: 1
# )

# u2 = User.create!(
#   f_name: 'Homer',
#   l_name: 'Simpson',
#   password: 'password',
#   email: 'username',
#   id: 2
# )

# u3 = User.create!(
#   f_name: '',
#   l_name: '',
#   password: '',
#   email: '',
#   id: 2
# )
# u = User.create!(
#   f_name: '',
#   l_name: '',
#   password: '',
#   email: '',
#   id: 2
# )
# u = User.create!(
#   f_name: '',
#   l_name: '',
#   password: '',
#   email: '',
#   id: 2
# )

# drinks
bar1 = Bar.create!(
  { name: 'the dump', location: 'yo momma', style: 'please work'}
)
bar2 = Bar.create!(
  { name: 'gamsaan', location: 'San Francisco...', style: 'cocktail'}
)
  
  


users = {
  '1' => {
    "f_name" => "Barney", "l_name" => "Gumble", "password" => "password","email" => "barneyG40@hotmail.com","id" =>"1"
  },
  '2' => {
    "f_name" => "Homer", "l_name" => "Simpson", "password" => "password","email" => "homersimpson39@myspace.com","id" =>"2"
  },
  '3' => {
    "f_name" => "Ernest T.", "l_name" => "Bass", "password" => "password","email" => "etbass@campfire.com","id" =>"3"
  },
  '4' => {
    "f_name" => "Otis", "l_name" => "Campbell", "password" => "password","email" => "otiscampbell@mayberrymail.com","id" => "4"
  },
  '5' => {
    "f_name" => "Bender", "l_name" => "Rodriguez", "password" => "password","email" => "getbent@planetexpress.net","id" =>"5"
  },
  '6' => {
    "f_name" => "Lucile", "l_name" => "Bluth", "password" => "password","email" => "lucilebluth@bluthco.com","id" =>"6"
  }
  
}

users.map do |num, details|
 user = User.create!(
   f_name: details["f_name"],
   l_name: details["l_name"],
   password: details["password"],
   email: details["email"],
   id: details["id"],
   img_url: "#{num}.jpeg",
   id: num
 )
end

#  drinks.map do |num, details|
#   drink = Drink.create!(
#     drink_name: details["drink_name"],
#     base_spirit: details["base_spirit"],
#     description: details["description"],
#     abv: details["abv"],
#     drink_style: details["drink_style"],
#     bar_id: details["bar_id"],
#     img_url: "#{num}.png",
#     id: num
#   )
#  end

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
    img_url: "#{num}.png",
    id: num
  )
 end
  
  
CheckIn.create!([
  {drink_id: 4, author_id: 1, body: "slurred mumbling", rating: 4.7},
  {drink_id: 3, author_id: 2, body: "I can't feel feelings!", rating: 3.2},
  {drink_id: 1, author_id: 2, body: "a delicate balance of aromatics make the spirit pop!", rating: 3},
  {drink_id: 2, author_id: 1, body: "gimme back my keys!", rating: 2.4}
])
