
json.drink do 
  json.extract! @drink, :id, :drink_name, :description, :abv, :base_spirit, :bar_id, :drink_style
  begin
    json.img_url asset_path("drink_images/#{drink.img_url}")
  rescue
    json.img_url @drink.img_url
  end
end