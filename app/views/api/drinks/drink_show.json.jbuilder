json.drink do
  json.partial! '/api/drinks/drink', drink: @drink
end