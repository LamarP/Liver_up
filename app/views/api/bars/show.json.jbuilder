# json.extract! @bar, :id, :bar_name, :location, :style
json.bar do 
  json.partial! 'bar', bar: bar
  json.numDrinks @bar.drinks.length
  json.drinkIds @bar.drink_ids
end

@bar.drinks.each do |drink|
  json.drinks do 
      json.set! drink.id do
          json.extract! drink, :id, :name, :abv, :style, :description
          json.breweryId drink.bar.id  
      end
  end
end