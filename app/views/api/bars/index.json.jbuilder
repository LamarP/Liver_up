@bars.each do |bar|
  json.set! bar.id do
    json.partial! 'bar', bar: bar
    json.numDrinks bar.drinks.size
  end
end