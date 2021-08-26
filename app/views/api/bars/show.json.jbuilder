json.extract! @bar, :id, :name, :location, :style
json.bar do 
  json.partial! 'bar', bar: @bar
  json.numDrinks @bar.drinks.length
  json.drinkIds @bar.drink_ids
end

@bar.drinks.each do |drink|
  json.drinks do 
      json.set! drink.id do
          json.extract! drink, :id, :drink_name, :abv, :drink_style, :description
          json.barId drink.bar.id  
      end
  end
end

json.img_url asset_path("bar_images/#{@bar.img_url}")