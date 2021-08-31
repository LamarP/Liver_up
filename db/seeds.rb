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
CheckIn.delete_all
Bar.delete_all

# b5
bars = {
  '1' => {
    "name" => "Paddy's Pub", "location" => 'Philadelphia, Pennsylvania', "style" => 'Irish Pub', "img_url" => "paddys.jpeg"
  },
  '2' => {
    "name" => "Moe's Tavern", "location" => 'Springfield, Oregon', "style" => 'Dive bar', "img_url" => 'moes.jpeg'
  },
  '3' => {
    "name" => 'gamsaan', "location" => 'San Francisco, California', "style" => 'cocktail', "img_url" => 'gamsaan.jpeg'
  },
  '4' => {
    "name" => 'Cheers', "location" => 'Boston, Massachusetts', "style" => 'Pub', "img_url" => 'cheers.jpeg'
  },
  '5' => {
    "name" => "Ugly's Saloon", "location" => 'Arlen, Texas', "style" => 'Country Western', "img_url" => 'uglys_saloon.jpeg'
  }  
}
bars.map do |num, details|
 bar = Bar.create!(
   name: details["name"],
   location: details["location"],
   style: details["style"],
   img_url: details["img_url"],
   id: num
 )
end
demo = User.create!(
  username: 'Handsome Devil',
  password: 'password',
  email: 'guest',
  id: 7
)
  


users = {
  '1' => {
    "username" => "Barney Gumble", "password" => "password","email" => "barneyG40@hotmail.com","id" => "1"
  },
  '2' => {
    "username" => "Homer Simpson", "password" => "password","email" => "homersimpson39@myspace.com","id" => "2"
  },
  '3' => {
    "username" => "Ernest T. Bass", "password" => "password","email" => "etbass@campfire.com","id" => "3"
  },
  '4' => {
    "username" => "Otis Campbell", "password" => "password","email" => "otiscampbell@mayberrymail.com","id" => "4"
  },
  '5' => {
    "username" => "Bender Rodriguez", "password" => "password","email" => "getbent@planetexpress.net","id" => "5"
  },
  '6' => {
    "username" => "Lucile Bluth", "password" => "password","email" => "lucilebluth@bluthco.com","id" => "6"
  }
  
}

users.map do |num, details|
 user = User.create!(
   username: details["username"],
   password: details["password"],
   email: details["email"],
   img_url: "#{num}.jpeg",
   id: num
 )
end


drinks = {
  '1' => {
    "drink_name" => "Apple Rita", "base_spirit" => "Tequila", "description" => "Bitter melon, cucumber, granny apple sweetend up with gum syrup.","abv" => 17.78,"drink_style" =>"Sour", "bar_id" => 3
  },
  '2' => {
    "drink_name" => "Old man Logan", "base_spirit" => "Scotch", "description" => "Smokey on the nose followed by a subtle sweet melon citrus, returning back to the smoke for the finish.","abv" => 17.62,"drink_style" =>"Sour", "bar_id" => 3
  },
  '3' => {
    "drink_name" => "Somber nights", "base_spirit" => "Vodka or Rum", "description" => "Bartenders take on boba tea. Robust chinese black tea, Nilla Wafer infused Milk, with lemon and winter melon sugar.","abv" => 8.25,"drink_style" =>"Milk Punch", "bar_id" => 3
  },
  '4' => {
    "drink_name" => "Ending start", "base_spirit" => "Rum", "description" => "Slightly peppery, aromatic, reminiscent of coconut crossed with vanilla.","abv" => 20,"drink_style" => "Tiki", "bar_id" => 3
  },
  '5' => {
    "drink_name" => "Mariposa", "base_spirit" => "Mezcal", "description" => "I ate the worm","abv" => 90000,"drink_style" =>"Sour", "bar_id" => 1
  },
  '6' => {
    "drink_name" => "Shoryuken", "base_spirit" => "Mezcal", "description" => "Chili Crisp infused Mezcal, cooled down with passionfruit chrysantum syrup and lime.","abv" => 17.65,"drink_style" =>"spicey sour", "bar_id" => 3
  },
  '7' => {
    "drink_name" => "Flaming Homer", "base_spirit" => "Brandy", "description" => "Tall and strong. Not for the faint of heart.","abv" => "N/A","drink_style" =>"kitchen sink", "bar_id" => 2
  },
  '8' => {
    "drink_name" => "Moe/'s Old Fashioned", "base_spirit" => "Rye Whiskey", "description" => "Made with rye whiskey, lightly sweetened with demerara simple syrup and aromatised with bitters and finally topped off with a lemon and orange zest.","abv" => 27,"drink_style" =>"Spirit Forward", "bar_id" => 1
  },
  '9' => {
    "drink_name" => "Moe/'s Manhattan", "base_spirit" => "Bourbon", "description" => "A delightful mix of bourbon, sweet vermouth, and bitters.","abv" => 30,"drink_style" =>"Spirit Forward", "bar_id" => 2
  },
  '10' => {
    "drink_name" => "Snowball Number 2", "base_spirit" => "Gin", "description" => "Bright, botanical, and astringent, yet strong enough to perk up the senses.","abv" => 25,"drink_style" => "Sour", "bar_id" => 2
  },
  '11' => {
    "drink_name" => "Duff beer", "base_spirit" => "Beer", "description" => "American lager: cheap, poor-quality, and heavily marketed everywhere.","abv" => 4.1,"drink_style" => "Lager", "bar_id" => 2
  },
  '12' => {
    "drink_name" => "Foggy Rose", "base_spirit" => "Vodka", "description" => "Tito/'s Handmade Vodka, Strawberry Puree, Muddled Basil, Cucumber, Ginger Beer","abv" => 12, "drink_style" => "Mule", "bar_id" => 4
  },
  '13' => {
    "drink_name" => "The 'Norm'al", "base_spirit" => "Beer", "description" => "Unknown draft beer","abv" => 'N/A',"drink_style" => "Draft beer", "bar_id" => 4
  },
  '14' => {
    "drink_name" => "St Helena Swing", "base_spirit" => "Gin", "description" => "Tanqueray gin, fresh rosemary, honey ginger syrup, lemon and lime juice", "abv" => 14, "drink_style" => "Sour", "bar_id" => 4
  },
  '15' => {
    "drink_name" => "Cubano", "base_spirit" => "Rum", "description" => "Don Q Rum, Angostura Bitters, fresh lime juice & mint, splash of Proseco","abv" => 25,"drink_style" => "Sour", "bar_id" => 4
  },
  '16' => {
    "drink_name" => "Mint Julep", "base_spirit" => "Bourbon", "description" => "Does there exist a more disgusting cocktail?","abv" => 11,"drink_style" => "Hot garbage", "bar_id" => 4
  },
  '17' => {
    "drink_name" => "The Texas Buck", "base_spirit" => "Bourbon", "description" => "A mix of Whiskey, Honey Syrup and Ginger Beer make up this delicious cocktail garnished with Candied Ginger.","abv" => 11,"drink_style" => "Mule", "bar_id" => 5
  },
  '18' => {
    "drink_name" => "Margerita Sangria", "base_spirit" => "Tequila", "description" => "We love a margarita and we love sangria...so much so, we decided to marry the two for one mouthwatering cocktail!  Combining a Dry White Wine, Tequila, Triple Sec, Orange Juice, Lime Juice, Fresh Orange and Lime Slices and Cilantro","abv" => 20,"drink_style" => "Sour/Sangria", "bar_id" => 5
  },
  '19' => {
    "drink_name" => "Paloma", "base_spirit" => "Tequila", "description" => "One of Mexico’s most popular cocktails, the Paloma is a perfectly refreshing combination of sweet and tart with grapefruit, lime, and a pinch of salt.","abv" => 11,"drink_style" => "Sour", "bar_id" => 5
  },
  '20' => {
    "drink_name" => "Tom Landry", "base_spirit" => "Gin", "description" => "Perfect mix of sweet and sour combine to make this lite and refreshing highball.","abv" => 12,"drink_style" => "Sour/Highball", "bar_id" => 5
  },
  '21' => {
    "drink_name" => "Mojito", "base_spirit" => "Rum", "description" => "This iconic Cuban drink is one of the greats. Not too sweet, bubbly, and minty fresh.","abv" => 15,"drink_style" => "Sour", "bar_id" => 5
  },
  '22' => {
    "drink_name" => "Irish Mule", "base_spirit" => "irish whiskey", "description" => "This Irish Mule Cocktail is a bright mix of smooth Irish whiskey, zesty ginger beer, and tart fresh squeezed lime juice. ","abv" => 20,"drink_style" => "Mule", "bar_id" => 1
  },
  '23' => {
    "drink_name" => "Irish Coffee", "base_spirit" => "Irish Whiskey", "description" => "The perfect combination of sweetened coffee, Irish whiskey, and (of course) whipped cream","abv" => 20,"drink_style" => "Coffee", "bar_id" => 1
  },
  '24' => {
    "drink_name" => "Classic Daiquiri", "base_spirit" => "Gin", "description" => "this classic cocktail is light, refreshing, and the perfect easy cocktail to while away the summer hours.", "abv" => 30, "drink_style" => "Martini", "bar_id" => 1
  },
  '25' => {
    "drink_name" => "Gin Gimlet", "base_spirit" => "Rum", "description" => "The perfect balance of sweet and tart with the botanical flavor of gin.","abv" => 30,"drink_style" => "Martini", "bar_id" => 1
  },
  '26' => {
    "drink_name" => "Aperol Spritz", "base_spirit" => "Aperol", "description" => "Bubbly, citrusy, herbal, subtly bitter and lightly sweet","abv" => 11,"drink_style" => "Spritz", "bar_id" => 1
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
  {drink_id: 4, author_id: 1, body: "buuuurrrrrrrrrppppp!!!!", rating: 4},
  {drink_id: 3, author_id: 2, body: "I can't feel feelings!", rating: 3},
  {drink_id: 1, author_id: 2, body: "a delicate balance of aromatics make the spirit pop!", rating: 3},
  {drink_id: 2, author_id: 1, body: "gimme back my keys!", rating: 2},
  {drink_id: 7, author_id: 6, body: "I mean it's one banana, Michael. What could it cost? 10 dollars?", rating: 2}
  ])
