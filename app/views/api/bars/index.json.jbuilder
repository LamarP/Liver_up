@bars.each do |bar|
  json.set! bar.id do
    json.partial! 'bar', bar: bar
    begin
      json.img_url asset_path("bar_images/#{bar.img_url}")
    rescue
      json.img_url bar.img_url
    end
  end
end