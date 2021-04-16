@drinks.each do |drink|
  json.set! drink.id do
    json.partial! 'drink', drink: drink
    begin
      json.img_url asset_path("drink_images/#{drink.img_url}")
    rescue
      json.img_url drink.img_url
    end
  end
end